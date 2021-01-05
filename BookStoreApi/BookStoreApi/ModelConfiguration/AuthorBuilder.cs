using BookStoreApi.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookStoreApi.Model_Builder
{
    public class AuthorBuilder : IEntityTypeConfiguration<Author>
    {

        public  void Configure (EntityTypeBuilder <Author> builder)
        {
            builder
                .Property(s => s.Nickname)
                .IsRequired()
                .HasMaxLength(15);
        }
    }
}
