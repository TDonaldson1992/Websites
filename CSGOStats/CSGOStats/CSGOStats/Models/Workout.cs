using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace CSGOStats.Models
{
    public class Workout
    {
        [Key]
        public int WorkoutID { get; set; }

        public string WorkoutName { get; set; }
        public int Kills { get; set; }
        public int Assists { get; set; }
        public int Deaths { get; set; }
        public double Weight { get; set; }
        public bool Completed { get; set; }
        public DateTime DateCompleted { get; set; }
    }
}