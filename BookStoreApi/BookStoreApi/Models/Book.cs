using BookStoreApi.Models.Interfaces;
using System.Collections.Generic;

namespace BookStoreApi.Models
{
    public class Book : IEntity
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Publisher { get; set; }
        public double Price { get; set; }

        public string ImgPath { get; set; }
        public int GenreId { get; set; }
        public Genre Genre { get; set; }

        public int AuthorId { get; set; }
        public Author Author { get; set; }
        public ICollection<BookUser> BookUsers { get; set; } = new List<BookUser>();

    }
}
