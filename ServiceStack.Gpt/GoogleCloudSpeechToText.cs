using Google.Cloud.Speech.V2;

namespace ServiceStack.Gpt;

public class GoogleCloudSpeechToText : ISpeechToText
{
    GoogleCloudSpeechConfig Config { get; }
    SpeechClient SpeechClient { get; }

    public GoogleCloudSpeechToText(GoogleCloudSpeechConfig config, SpeechClient speechClient)
    {
        Config = config;
        SpeechClient = speechClient;
    }

    public async Task InitAsync(List<string> phrases, CancellationToken token = default)
    {
        try
        {
            await SpeechClient.DeletePhraseSetAsync(new DeletePhraseSetRequest
            {
                PhraseSetName = new PhraseSetName(Config.Project, Config.Location, Config.PhraseSetId)
            });
        }
        catch (Exception ignoreNonExistingPhraseSet) {}

        await SpeechClient.CreatePhraseSetAsync(new CreatePhraseSetRequest
        {
            Parent = $"projects/{Config.Project}/locations/{Config.Location}",
            PhraseSetId = Config.PhraseSetId,
            PhraseSet = new PhraseSet
            {
                Phrases =
                {
                    phrases.Map(x => new PhraseSet.Types.Phrase { Value = x, Boost = 10 })
                }
            }
        });        
        
        try
        {
            await SpeechClient.DeleteRecognizerAsync(new DeleteRecognizerRequest
            {
                RecognizerName = new RecognizerName(Config.Project, Config.Location, Config.RecognizerId)
            });
        }
        catch (Exception ignoreNonExistingRecognizer) {}

        await SpeechClient.CreateRecognizerAsync(new CreateRecognizerRequest
        {
            Parent = $"projects/{Config.Project}/locations/{Config.Location}",
            RecognizerId = Config.RecognizerId,
            Recognizer = new Recognizer
            {
                DefaultRecognitionConfig = new RecognitionConfig
                {
                    AutoDecodingConfig = new AutoDetectDecodingConfig(),
                    LanguageCodes = { "en-US", "en-AU" },
                    Model = "latest_short",
                    Adaptation = new SpeechAdaptation
                    {
                        PhraseSets =
                        {
                            new SpeechAdaptation.Types.AdaptationPhraseSet
                            {
                                PhraseSet = $"projects/{Config.Project}/locations/{Config.Location}/phraseSets/{Config.PhraseSetId}"
                            }
                        }
                    }
                },
            },
        });
    }

    public async Task<TranscriptResult> TranscribeAsync(string recordingPath, CancellationToken token = default)
    {
        var response = await SpeechClient.RecognizeAsync(new RecognizeRequest
        {
            Recognizer = $"projects/{Config.Project}/locations/{Config.Location}/recognizers/{Config.RecognizerId}",
            Uri = $"gs://{Config.Bucket}".CombineWith(recordingPath)
        });

        var alt = response.Results[0].Alternatives[0];
        var result = new TranscriptResult
        {
            Transcript = alt.Transcript,
            Confidence = alt.Confidence,
            ApiResponse = response.Results[0].ToJson()
        };
        return result;
    }
}