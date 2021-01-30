using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace rsb_app.Data
{
    public class CreateBookDto
    {
        public string Name { get; set; }

        public string Description { get; set; }

        public DateTime DatePublish { get; set; }
    }
}
