using BookStoreApi.Models.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookStoreApi.Models
{
    public class MarketCart :IEntity
    {
        public int Id { get; set; }
        public ICollection<Book> Books { get; set; } = new List<Book>();
        public double Price { get; set; }
        public int Count { get; set; }
    }
}
