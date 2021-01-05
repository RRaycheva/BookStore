using BookStoreApi.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookStoreApi.Model_Builder
{
    public class BookUserBuilder:IEntityTypeConfiguration<BookUser>
    {
        public void Configure (EntityTypeBuilder<BookUser> builder)
        {
                builder
                 .HasKey(s => new { s.BookId, s.UserId });
        }

        //public BookUserBuilder(ModelBuilder modelBuilder)
        //{
        //    modelBuilder.Entity<BookUser>()
        //        .HasKey(s => new { s.BookId, s.UserId });


        //}
    }
}
