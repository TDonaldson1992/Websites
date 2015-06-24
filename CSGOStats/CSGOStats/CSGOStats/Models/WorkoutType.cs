using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace CSGOStats.Models
{
    public class WorkoutType
    {
        [Key]
        public int WorkoutID { get; set; }

        public string WorkoutName { get; set; }
        public DateTime DateAdded { get; set; }

    }
}