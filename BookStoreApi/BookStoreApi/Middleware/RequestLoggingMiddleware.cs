using BookStoreApi.Models;
using BookStoreApi.Services;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using System.Threading.Tasks;

namespace BookStoreApi.Middleware
{
    public class RequestLoggingMiddleware
    {
        private readonly RequestDelegate next;

        public RequestLoggingMiddleware(RequestDelegate next)
        {
            this.next = next;
        }
        
        public Task Invoke(HttpContext httpContext, ILoggerService service)
        {
            //var log = new LogEntry
            //{
            //    LoggingTime = DateTime.UtcNow,
            //    RequestVerb = httpContext.Request.Method,
            //    Ip = httpContext.Connection.RemoteIpAddress.ToString()
            //};

            //dbContext.Add(log);
            //dbContext.SaveChanges();
            service.LogRequest(httpContext);

            return next(httpContext);
        }
    }

    public static class MiddlewareExtensions
    {
        public static IApplicationBuilder UseLoggingMiddleware(this IApplicationBuilder builder)
        {
            return builder.UseMiddleware<RequestLoggingMiddleware>();
        }
    }
}
