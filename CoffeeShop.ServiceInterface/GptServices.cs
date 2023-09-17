using System.Net;
using ServiceStack;
using ServiceStack.AI;
using ServiceStack.OrmLite;
using CoffeeShop.ServiceModel;

namespace CoffeeShop.ServiceInterface;

public class GptServices : Service
{
    public AppConfig Config { get; set; }
    public IAutoQueryDb AutoQuery { get; set; }
    public ISpeechToText SpeechToText { get; set; }
    public IPromptProviderFactory PromptFactory { get; set; }
    public ITypeChat TypeChat { get; set; }

    [AddHeader(HttpHeaders.ContentType, MimeTypes.PlainText)]
    public async Task<string> Any(GetSchema request)
    {
        return await PromptFactory.Get(request.Feature).CreateSchemaAsync();
    }

    [AddHeader(HttpHeaders.ContentType, MimeTypes.PlainText)]
    public async Task<string> Any(GetPrompt request)
    {
        return await PromptFactory.Get(request.Feature).CreatePromptAsync(request.UserMessage);
    }

    public async Task<StringsResponse> Any(GetPhrases request)
    {
        var phraseWeights = await PromptFactory.Get(request.Feature).GetPhraseWeightsAsync();
        return new StringsResponse { Results = phraseWeights.Map(x => x.Item1).ToList() };
    }

    public async Task Any(InitSpeech request)
    {
        var phraseWeights = await PromptFactory.Get(request.Feature).GetPhraseWeightsAsync(defaultWeight:10);
        await SpeechToText.InitAsync(new() {
            PhraseWeights = phraseWeights.Map(x => KeyValuePair.Create(x.Item1, x.Item2))
        });
    }

    public async Task<Recording> Any(CreateRecording request)
    {
        var feature = request.Feature.ToLower();
        var recording = (Recording)await AutoQuery.CreateAsync(request, Request);

        var transcribeStart = DateTime.UtcNow;
        await Db.UpdateOnlyAsync(() => new Recording { TranscribeStart = transcribeStart },
            where: x => x.Id == recording.Id);

        ResponseStatus? responseStatus = null;
        try
        {
            var response = await SpeechToText.TranscribeAsync(request.Path);
            var transcribeEnd = DateTime.UtcNow;
            await Db.UpdateOnlyAsync(() => new Recording
            {
                Feature = feature,
                Provider = SpeechToText.GetType().Name,
                Transcript = response.Transcript,
                TranscriptConfidence = response.Confidence,
                TranscriptResponse = response.ApiResponse,
                TranscribeEnd = transcribeEnd,
                TranscribeDurationMs = (int)(transcribeEnd - transcribeStart).TotalMilliseconds,
                Error = response.ResponseStatus.ToJson(),
            }, where: x => x.Id == recording.Id);
            responseStatus = response.ResponseStatus;
        }
        catch (Exception e)
        {
            await Db.UpdateOnlyAsync(() => new Recording { Error = e.ToString() },
                where: x => x.Id == recording.Id);
            responseStatus = e.ToResponseStatus();
        }

        recording = await Db.SingleByIdAsync<Recording>(recording.Id);

        WriteJsonFile($"/speech-to-text/{feature}/{recording.CreatedDate:yyyy/MM/dd}/{recording.CreatedDate.TimeOfDay.TotalMilliseconds}.json", 
            recording.ToJson());

        if (responseStatus != null)
            throw new HttpError(responseStatus, HttpStatusCode.BadRequest);

        return recording;
    }

    public async Task<Chat> Any(CreateChat request)
    {
        var feature = request.Feature.ToLower();
        var promptProvider = PromptFactory.Get(feature);
        var chat = (Chat)await AutoQuery.CreateAsync(request, Request);

        var chatStart = DateTime.UtcNow;
        await Db.UpdateOnlyAsync(() => new Chat { ChatStart = chatStart },
            where: x => x.Id == chat.Id);

        ResponseStatus? responseStatus = null;
        try
        {
            var schema = await promptProvider.CreateSchemaAsync();
            var prompt = await promptProvider.CreatePromptAsync(request.UserMessage);
            var typeChatRequest = CreateTypeChatRequest(feature, schema, prompt, request.UserMessage, request.Translator);
            
            var response = await TypeChat.TranslateMessageAsync(typeChatRequest);
            var chatEnd = DateTime.UtcNow;
            await Db.UpdateOnlyAsync(() => new Chat
            {
                Request = request.UserMessage,
                Feature = feature,
                Provider = TypeChat.GetType().Name,
                Schema = schema,
                Prompt = prompt,
                ChatResponse = response.Result,
                ChatEnd = chatEnd,
                ChatDurationMs = (int)(chatEnd - chatStart).TotalMilliseconds,
                Error = response.ResponseStatus.ToJson(),
            }, where: x => x.Id == chat.Id);
            responseStatus = response.ResponseStatus;
        }
        catch (Exception e)
        {
            await Db.UpdateOnlyAsync(() => new Chat { Error = e.ToString() },
                where: x => x.Id == chat.Id);
            responseStatus = e.ToResponseStatus();
        }

        chat = await Db.SingleByIdAsync<Chat>(chat.Id);
        
        WriteJsonFile($"/chat/{feature}/{chat.CreatedDate:yyyy/MM/dd}/{chat.CreatedDate.TimeOfDay.TotalMilliseconds}.json", chat.ToJson());

        if (responseStatus != null)
            throw new HttpError(responseStatus, HttpStatusCode.BadRequest);
        
        return chat;
    }
    
    public TypeChatRequest CreateTypeChatRequest(string feature, string schema, string prompt, string userMessage, 
           TypeChatTranslator? translator = null) => 
        new(schema, prompt, userMessage) {
            NodePath = Config.NodePath,
            NodeProcessTimeoutMs = Config.NodeProcessTimeoutMs,
            WorkingDirectory = Environment.CurrentDirectory,
            SchemaPath = Config.GetSiteConfig(feature).GptPath.CombineWith("schema.ts"),
            TypeChatTranslator = translator ?? TypeChatTranslator.Json,
        };

    void WriteJsonFile(string path, string json)
    {
        ThreadPool.QueueUserWorkItem(_ => {
            try
            {
                VirtualFiles.WriteFile(path, json);
            }
            catch (Exception ignore) {}
        });
    }
}