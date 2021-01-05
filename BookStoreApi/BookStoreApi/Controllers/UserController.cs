using BookStoreApi.Models;
using BookStoreApi.Services;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace BookStoreApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        protected readonly IService<User> service;
        public UserController(IService<User> service)
        {
            this.service = service;
        }

        [HttpGet]
        public IEnumerable<User> GetAll()
            => this.service.GetAll();

        [HttpGet("{id:int}")]
        public User Get([FromRoute] int id)
            => this.service.Get(id);

        [HttpDelete("{id:int}")]
        public void Delete([FromRoute] int id)
        {
            service.Delete(id);
        }
        [HttpPost]
        public User Create([FromBody] User user)
            => this.service.Create(user);

        [HttpPut]
        public User Update([FromBody]User user)
            => this.service.Update(user);
    }
}
