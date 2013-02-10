using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web.Mvc;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using ContactManager.Web;
using ContactManager.Web.Controllers;

namespace ContactManager.Web.Tests.Controllers
{
    [TestClass]
    public class HomeControllerTest
    {
        [TestMethod]
        public void Index_Contains_ngApp_In_ViewBag()
        {
            var controller = new HomeController();

            var result = controller.Index() as ViewResult;

            Assert.IsInstanceOfType(result.ViewBag.ngApp, typeof(string));
        }
    }
}
