using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CSGOStats.ViewModels
{
    public class WorkoutListViewModel : BaseViewModel
    {
        public List<WorkoutViewModel> Workouts { get; set; }
    }
}