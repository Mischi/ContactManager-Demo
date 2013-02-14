using ContactManager.Web.Infrastructure;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web;
using System.Web.Hosting;
using System.Web.Http;

namespace ContactManager.Web.api
{
    public class UploadImageController : ApiController
    {
        private static readonly string mediaPath = HttpContext.Current.Server.MapPath("~/Images/");
        private static readonly string applicationPath = HostingEnvironment.MapPath("~/");


        //POST api/uploadimage
        public async Task<IEnumerable<string>> Post()
        {
            if (!Request.Content.IsMimeMultipartContent())
            {
                throw new HttpResponseException(HttpStatusCode.UnsupportedMediaType);
            }

            var multipartStreamProvider = new UniqueMultipartFormDataStreamProvider(mediaPath);
            await Request.Content.ReadAsMultipartAsync(multipartStreamProvider);

            return multipartStreamProvider.FileData.Select(fd => ResolveVirtual(fd.LocalFileName));
        }


        public static string ResolveVirtual(string physicalPath)
        {
            string url = physicalPath.Substring(applicationPath.Length).Replace('\\', '/');
            return (url);
        }
    }
}
