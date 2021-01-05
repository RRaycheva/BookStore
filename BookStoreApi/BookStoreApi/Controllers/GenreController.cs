using Microsoft.AspNetCore.Mvc;
using BookStoreApi.Models;
using BookStoreApi.Services;
using System.Collections.Generic;

namespace BookStoreApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GenreController : ControllerBase
    {
        protected readonly IService<Genre> service;
        public GenreController(IService<Genre> service)
        {
            this.service = service;
        }
        [HttpGet]
        public IEnumerable<Genre> GetAll()
            => this.service.GetAll();

        [HttpGet("{id:int}")]
        public Genre Get([FromRoute] int id)
            => this.service.Get(id);

        [HttpDelete("{id:int}")]
        public void Delete([FromRoute]int id)
        {
            service.Delete(id);
        }
        [HttpPost]
        public Genre Create([FromBody] Genre genre)
            => this.service.Create(genre);

        [HttpPut]
        public Genre Update([FromBody] Genre genre)
            => this.service.Update(genre);

    }
}
