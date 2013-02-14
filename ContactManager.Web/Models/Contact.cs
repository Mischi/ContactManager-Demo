using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace ContactManager.Web.Models
{
    [Table("Contacts")]
    public class Contact
    {
        public Guid Id { get; set; }

        [Required]
        public string LastName { get; set; }

        [Required]
        public string FirstName { get; set; }

        public int? Age { get; set; }

        public string Image { get; set; }
    }
}