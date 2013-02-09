using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ContactManager.Web.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            string ngApp = "contactmanager";

#if INTEGRATION
            ngApp = "e2e";
#endif

            ViewBag.ngApp = ngApp;
            return View();
        }
    }
}
