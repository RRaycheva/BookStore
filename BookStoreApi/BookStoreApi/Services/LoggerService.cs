﻿using BookStoreApi.Models;
using BookStoreApi.Models.Common;
using Microsoft.AspNetCore.Http;
using System;

namespace BookStoreApi.Services
{
    public  class LoggerService : ILoggerService
    {
        private readonly BookStoreContext dbContext;
        public LoggerService(BookStoreContext dbContext)
        {
            this.dbContext = dbContext;
        }
        public void LogRequest(HttpContext httpContext)
        {
            var log = new LogEntry
            {
                LoggingTime = DateTime.UtcNow,
                RequestVerb = httpContext.Request.Method,
                Ip = httpContext.Connection.RemoteIpAddress.ToString()
            };

            dbContext.Add(log);
            dbContext.SaveChanges();
           
        }

        public void LogException(Exception exception)
        {
            var msg = $"Exception {exception.Message}";

            var log = new LogEntry
            {
                Message = msg 
            };

            dbContext.Add(log);
            dbContext.SaveChanges();
        }
    }
}
