using System.Web;
using System.Web.Optimization;

namespace ContactManager.Web
{
    public class BundleConfig
    {
        // For more information on Bundling, visit http://go.microsoft.com/fwlink/?LinkId=254725
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/js/all").Include(
                        "~/Scripts/jquery-{version}.js",
                        "~/Scripts/angular-1.1.2/angular.js",
#if INTEGRATION
                        "~/Scripts/angular-1.1.2/angular-mocks.js",
                        "~/Scripts/app/appE2E.js",
#endif
                        "~/Scripts/bootstrap.js",
                        "~/Scripts/app/app.js",
                        "~/Scripts/app/Controllers/*.js",
                                                "~/Scripts/app/Services/*.js",
                        "~/Scripts/app/Directives/*.js"));


            bundles.Add(new StyleBundle("~/css/all").Include(
                        "~/Content/bootstrap.css",
                        "~/Content/site.css",
                        "~/Content/bootstrap-responsive.css"));

            BundleTable.EnableOptimizations = false;
        }
    }
}