
using BookStoreApi.Log;
using Microsoft.EntityFrameworkCore;

namespace BookStoreApi.Models
{
    public class BookStoreContext : DbContext
    {
        public DbSet<Book> Books { get; set; }
        public DbSet<Author> Authors { get; set; }
        public DbSet<BookUser> BookUsers { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<LogEntry> Logs { get; set; }


        public BookStoreContext(DbContextOptions options)
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //AuthorBuilder.AuthorCreating(modelBuilder);

            //new AuthorBuilder(modelBuilder);
            //new BookBuilder(modelBuilder);
            //new UserBuilder(modelBuilder);
            //new BookUserBuilder(modelBuilder);

            modelBuilder.ApplyConfigurationsFromAssembly(typeof(BookStoreContext).Assembly);
           
        }
    }
}
