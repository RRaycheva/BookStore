using BookStoreApi.Models;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookStoreApi.Services
{
    public interface ILoggerService
    {
        void LogRequest(HttpContext httpContext);
        void LogException(Exception exception);

    }
}
