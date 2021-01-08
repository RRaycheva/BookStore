using System;

namespace BookStoreApi.Log
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
