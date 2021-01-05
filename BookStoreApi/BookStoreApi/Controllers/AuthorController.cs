using BookStoreApi.Models;
using BookStoreApi.Services;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace BookStoreApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthorController : ControllerBase
    {
        protected readonly IService<Author> service;
        public AuthorController(IService<Author> service)
        {
            this.service = service;
        }

        [HttpGet]
        public IEnumerable<Author> GetAll()
        => this.service.GetAll();

        [HttpGet("{id:int}")]
        public Author Get([FromRoute] int id)
        => this.service.Get(id);

        [HttpDelete("{id:int}")]
        public void Delete([FromRoute] int id)
        => this.service.Delete(id);
        
        [HttpPut]
        public Author Update([FromBody] Author author)
        => this.service.Update(author);

        [HttpPost]
        public Author Create([FromBody] Author author)
           => this.service.Create(author);
    }
}
