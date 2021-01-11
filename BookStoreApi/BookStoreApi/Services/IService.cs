using System.Collections.Generic;

namespace BookStoreApi.Services
{
    public interface IService<T>
   {
         T Create(T model) ;
        void Delete(int id);
        T Update(T model);
        T Get(int id);
        IEnumerable<T> GetAll();
   }
}
