using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace ContactManager.Web
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            //IIS want to handle that url because of the .html extension. 
            //We have defined a wildcard in Web.config's <system.webServer> for /templates/*.html so that
            //ASP.NET has a chance to handle the request.
            routes.MapRoute(
                name: "TemplatesRoute",
                url: "templates/{name}.html",
                defaults: new { controller = "Templates", action = "Get" }
            );

            //We are using html5 History API so whatever request comes in 
            //always return HomeController's Index
            routes.MapRoute(
                name: "CatchAllRoute",
                url: "{*url}",
                defaults: new { controller = "Home", action = "Index" }
            );
        }
    }
}