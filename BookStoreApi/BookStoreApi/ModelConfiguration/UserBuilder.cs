using BookStoreApi.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookStoreApi.Model_Builder
{
    public class UserBuilder :IEntityTypeConfiguration<User>
    {

        public void Configure(EntityTypeBuilder<User> builder)
        {
            builder
                .Property(s => s.FirstName)
                .IsRequired();

            builder
                .Property(s => s.LastName)
                .IsRequired();

            builder
                .HasIndex(s => s.Email)
                .IsUnique();
        }

        //public UserBuilder(ModelBuilder modelBuilder)
        //{
        //    modelBuilder.Entity<User>()
        //        .Property(s => s.FirstName)
        //        .IsRequired();

        //    modelBuilder.Entity<User>()
        //        .Property(s => s.LastName)
        //        .IsRequired();

        //    modelBuilder.Entity<User>()
        //        .HasIndex(s => s.Email)
        //        .IsUnique();
        //}

    }
}
