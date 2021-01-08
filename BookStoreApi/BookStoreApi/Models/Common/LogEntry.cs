using System;

namespace BookStoreApi.Models.Common
{
    public class LogEntry
    {
        public int Id { get; set; }
        public DateTime LoggingTime { get; set; }
        public string Ip { get; set; }
        public string RequestVerb { get; set; }
        public string Message { get; set; }
    }
}
