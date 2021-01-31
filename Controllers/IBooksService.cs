using Microsoft.AspNetCore.Mvc;
using rsb_app.Data;
using rsb_app.Dto;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace rsb_app.Controllers
{
    public interface IBooksService
    {
        /// <summary>
        /// Получить все книги
        /// </summary>
        /// <returns>все книги</returns>
        Task<ActionResult<IEnumerable<BookDto>>> GetBooks();



            /// <summary>
            /// Изменить книгу
            /// </summary>
            /// <param name="id">id книги</param>
            /// <param name="book">книга</param>
            /// <returns></returns>
        Task<IActionResult> PutBook(int id, CreateBookDto book);
    }
}