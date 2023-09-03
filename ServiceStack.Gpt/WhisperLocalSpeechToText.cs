using System.Diagnostics;
using ServiceStack.Text;

namespace ServiceStack.Gpt;

public class WhisperLocalSpeechToText : ISpeechToText
{
    private const string WhisperArgs = "--model small --fp16 False --output_format json --language English";
    public string? WhisperPath { get; set; }
    public string? WorkingDirectory { get; set; }
    public int TimeoutMs { get; set; } = 120 * 1000;

    public Task InitAsync(List<string> phrases, CancellationToken token = default) => Task.CompletedTask;

    public async Task<TranscriptResult> TranscribeAsync(string recordingPath, CancellationToken token = default)
    {
        var relativePath = recordingPath.TrimStart('/');
        var fileName = recordingPath.LastRightPart('/');
        var whisperPath = WhisperPath ?? ProcessUtils.FindExePath("whisper");
        if (whisperPath == null)
            throw new NotSupportedException("whisper is not in $PATH");
                
        var processInfo = new ProcessStartInfo
        {
            WorkingDirectory = WorkingDirectory ?? Environment.CurrentDirectory.CombineWith(relativePath.LastLeftPart('/')),
            FileName = whisperPath,
            Arguments = $"{WhisperArgs} {fileName}",
        };
        if (Env.IsWindows)
            processInfo = processInfo.ConvertToCmdExec();

        var sb = StringBuilderCache.Allocate();
        var sbError = StringBuilderCacheAlt.Allocate();
        await ProcessUtils.RunAsync(processInfo, TimeoutMs,
            onOut: data => sb.AppendLine(data),
            onError: data => sbError.AppendLine(data));
        
        var stdout = StringBuilderCache.ReturnAndFree(sb);
        var stderr = StringBuilderCacheAlt.ReturnAndFree(sbError);
        string? text = null;
        string? json = null;

        var jsonFile = processInfo.WorkingDirectory.CombineWith(fileName.LastLeftPart('.') + ".json");
        if (File.Exists(jsonFile))
        {
            json = await File.ReadAllTextAsync(jsonFile, token);
            var obj = (Dictionary<string,object>) JSON.parse(json);
            text = obj.TryGetValue("text", out var oText)
                ? oText as string
                : null;
        }

        if (text == null)
        {
            throw new Exception($"Failed to whisper transcribe {recordingPath}: {stderr}\n{stdout}");
        }

        var result = new TranscriptResult
        {
            Transcript = text,
            ApiResponse = json!,
        };
        return result;
    }
}