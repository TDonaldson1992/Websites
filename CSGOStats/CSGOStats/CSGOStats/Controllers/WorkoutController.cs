using CSGOStats.DataAccessLayer;
using CSGOStats.Filters;
using CSGOStats.Models;
using CSGOStats.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CSGOStats.Controllers
{
    public class WorkoutController : Controller
    {
        [FooterFilter]
        public ActionResult Index()
        {
            string connectionString = System.Configuration.ConfigurationManager.ConnectionStrings["DatabaseManager"].ConnectionString;
            WorkoutListViewModel workoutListViewModel = new WorkoutListViewModel();
            DatabaseManager dm = new DatabaseManager(connectionString);

            List<Workout> workouts = dm.GetWorkouts();
            List<WorkoutViewModel> workoutViewModels = new List<WorkoutViewModel>();

            foreach (Workout workout in workouts)
            {
                WorkoutViewModel wvm = new WorkoutViewModel();
                wvm.WorkoutID = workout.WorkoutID;
                wvm.WorkoutName = workout.WorkoutName;
                wvm.Kills = workout.Kills;
                wvm.Assists = workout.Assists;
                wvm.Deaths = workout.Deaths;
                wvm.Weight = workout.Weight.ToString("0.00") + " lbs";
                wvm.Completed = workout.Completed;
                wvm.DateCompleted = workout.DateCompleted;

                workoutViewModels.Add(wvm);
            }

            workoutListViewModel.Workouts = workoutViewModels;

            return View("Index", workoutListViewModel);
        }
    }
}