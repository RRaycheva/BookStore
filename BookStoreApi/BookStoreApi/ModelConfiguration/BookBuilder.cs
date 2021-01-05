using BookStoreApi.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookStoreApi.Model_Builder
{
    public class BookBuilder:IEntityTypeConfiguration<Book>
    {
        public void Configure(EntityTypeBuilder<Book> builder)
        {
            builder
                 .Property(s => s.Title)
                 .IsRequired()
                 .HasColumnType("Name")
                 .HasMaxLength(50);

            builder
                  .Property(p => p.Description)
                  .IsRequired()
                  .HasMaxLength(300);
        }


        //public BookBuilder(ModelBuilder modelBuilder)
        //{
        //    modelBuilder.Entity<Book>()
        //        .Property(s => s.Title)
        //        .IsRequired()
        //        .HasColumnType("Name")
        //        .HasMaxLength(50);

        //    modelBuilder.Entity<Book>()
        //        .Property(p => p.Description)
        //        .IsRequired()
        //        .HasMaxLength(300);
        //}

    }
}
