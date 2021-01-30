using Microsoft.EntityFrameworkCore;
using rsb_app.Enitites;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace rsb_app.Data
{
    public class BooksDbContext :DbContext
    {
        public DbSet<Book> Books { get; set; }

        public BooksDbContext(DbContextOptions<BooksDbContext> options) : base(options)
        {
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Book>(entity => entity.Property(p => p.DatePublish).HasColumnType("date"));
                        
        }
    }
}
