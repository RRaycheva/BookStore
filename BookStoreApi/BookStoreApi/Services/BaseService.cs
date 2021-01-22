using BookStoreApi.Models;
using BookStoreApi.Models.Interfaces;
using Microsoft.EntityFrameworkCore;

using System.Collections.Generic;
using System.Linq;

namespace BookStoreApi.Services
{
    public class BaseService<T> : IService<T>
       where T : class, IEntity
    {
        protected readonly BookStoreContext context;
        public BaseService(BookStoreContext context)
        {
            this.context = context;
        }

        public IEnumerable<T> GetAll()
        {
            //throw new Exception("hdsahg");
            return context.Set<T>()
                .ToList();
        }

        public T Get(int id)
        {
            return context.Set<T>()
                .Single(s => s.Id == id);
        }

        public void Delete(int id)
        {
            var model = context.Set<T>()
                 .Single(s => s.Id == id);
            
            context.Remove(model);
            context.SaveChanges();
        }

        public T Update(T model)
        {
            context.Entry(model).State = EntityState.Modified;
            context.SaveChanges();
            return model;
        }

        public virtual T Create(T model)
        {
            //context.Set<T>().Add(model);
            context.Entry(model).State = EntityState.Added;
            context.SaveChanges();
            return model;
        }

    }
}
