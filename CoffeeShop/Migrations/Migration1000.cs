using ServiceStack.DataAnnotations;
using ServiceStack.OrmLite;

namespace CoffeeShop.Migrations;

public class Migration1000 : MigrationBase
{
    public class Recording
    {
        [AutoIncrement]
        public int Id { get; set; }
        public string Feature { get; set; }
        public string Provider { get; set; }
        public string Path { get; set; }
        public string? Transcript { get; set; }
        public float? TranscriptConfidence { get; set; }
        public string? TranscriptResponse { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime? TranscribeStart { get; set; }
        public DateTime? TranscribeEnd { get; set; }
        public int? TranscribeDurationMs { get; set; }
        public int? DurationMs { get; set; }
        public string? IpAddress { get; set; }
        public string? Error { get; set; }
    }

    public class Chat
    {
        [AutoIncrement]
        public int Id { get; set; }
        public string Feature { get; set; }
        public string Provider { get; set; }
        public string Request { get; set; }
        public string Prompt { get; set; }
        public string Schema { get; set; }
        public string? ChatResponse { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime? ChatStart { get; set; }
        public DateTime? ChatEnd { get; set; }
        public int? ChatDurationMs { get; set; }
        public string? IpAddress { get; set; }
        public string? Error { get; set; }
    }    
    public override void Up()
    {
        Db.CreateTable<Recording>();
        Db.CreateTable<Chat>();
    }

    public override void Down()
    {
        Db.DropTable<Chat>();
        Db.DropTable<Recording>();
    }
}