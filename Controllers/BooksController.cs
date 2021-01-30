using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using rsb_app.Data;
using rsb_app.Dto;
using rsb_app.Enitites;

namespace rsb_app.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BooksController : ControllerBase
    {
        private readonly BooksDbContext _context;

        public BooksController(BooksDbContext context)
        {
            _context = context;
        }

        // GET: api/Books1
        [HttpGet]
        public async Task<ActionResult<IEnumerable<BookDto>>> GetBooks()
        {
            return await _context.Books.Select(book=>new BookDto 
            {Id = book.Id,
            Name = book.Name,
            Description = book.Description,
            DatePublish = book.DatePublish
            }).ToListAsync();
        }

        // GET: api/Books1/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Book>> GetBook(int id)
        {
            var book = await _context.Books.FindAsync(id);

            if (book == null)
            {
                return NotFound();
            }

            return book;
        }

        // PUT: api/Books1/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBook(int id, CreateBookDto book)
        {
            var bookFound= await  _context.Books.FirstOrDefaultAsync(book => book.Id == id);
            if (bookFound==null)
            {
                throw new NullReferenceException(nameof(bookFound));
            }

            bookFound.Name = book.Name;
            bookFound.Description = book.Description;
            bookFound.DatePublish = book.DatePublish;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BookExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Books1
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Book>> PostBook(CreateBookDto bookDto)
        {
            var bookAdd= new Book { 
                Name = bookDto.Name, 
                Description = bookDto.Description ,
                DatePublish = bookDto.DatePublish
            };
            _context.Books.Add(bookAdd);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetBook", new { id = bookAdd.Id }, bookAdd);
        }

        // DELETE: api/Books1/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBook(int id)
        {
            var book = await _context.Books.FindAsync(id);
            if (book == null)
            {
                return NotFound();
            }

            _context.Books.Remove(book);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool BookExists(int id)
        {
            return _context.Books.Any(e => e.Id == id);
        }
    }
}
