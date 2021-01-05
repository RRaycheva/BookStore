using BookStoreApi.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace BookStoreApi.ModelConfiguration
{
    public class GenreBuilder : IEntityTypeConfiguration<Genre>
    {
        public void Configure(EntityTypeBuilder<Genre> builder)
        {
            builder
                .Property(s => s.Name)
                .IsRequired()
                .HasMaxLength(30);
        }

    }
}
