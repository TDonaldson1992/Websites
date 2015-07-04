using CSGOStats.DataAccessLayer;
using CSGOStats.Models;
using CSGOStats.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CSGOStats.Controllers
{
    public class ConstructionController : Controller
    {
        // GET: Construction
        public ActionResult UnderConstruction()
        {
            return View();
        }
    }
}