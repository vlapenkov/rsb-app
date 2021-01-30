using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace rsb_app.Dto
{
    public class BookDto
    {
        public int Id { get; set; }
               
        public string Name { get; set; }

        public string Description { get; set; }

        public DateTime DatePublish { get; set; }
    }
}
