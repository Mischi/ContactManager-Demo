using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ContactManager.Web.Controllers
{
    public class TemplatesController : Controller
    {
        //
        // GET: /templates/home.html

        [HttpGet]
        public ActionResult Get(string name)
        {
            return PartialView(name);
        }

    }
}
