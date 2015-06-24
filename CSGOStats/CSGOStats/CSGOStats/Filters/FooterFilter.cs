using CSGOStats.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CSGOStats.Filters
{
    public class FooterFilter : ActionFilterAttribute
    {
        public override void OnActionExecuted(ActionExecutedContext filterContext)
        {
            ViewResult v = filterContext.Result as ViewResult;
            if (v.Model != null)
            {
                BaseViewModel bvm = v.Model as BaseViewModel;
                bvm.UserName = "Tester";
                bvm.FooterData = new FooterViewModel();
            }
        }
    }
}