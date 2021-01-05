using BookStoreApi.Models;
using BookStoreApi.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BookStoreApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookController : ControllerBase
    {
        protected readonly IService<Book> service;
        private readonly BookStoreContext context;

        public BookController(IService<Book> service, BookStoreContext context)
        {
            this.service = service;
            this.context = context;
        }
        [HttpGet]
        public async Task<IEnumerable<Book>> GetAll()
        {
            var books = await this.context.Books
                .Include(book => book.Author)
                .Include(book => book.Genre)
                .ToListAsync();
            
            return books;
        }

        [HttpGet("{id:int}")]
        public Book Get([FromRoute] int id)
            => this.service.Get(id);

        [HttpDelete("{id:int}")]
        public void Delete([FromRoute] int id)
            => this.service.Delete(id);

        [HttpPost]
        public Book Create([FromBody] Book book)
            => this.service.Create(book);

        [HttpPut]
        public Book Update([FromBody] Book book)
            => this.service.Update(book);
    }
}
