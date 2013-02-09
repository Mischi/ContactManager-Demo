namespace ContactManager.Web.Migrations
{
    using ContactManager.Web.Models;
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<ContactManager.Web.Data.ContactsDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(ContactManager.Web.Data.ContactsDbContext context)
        {
            context.Contacts.AddOrUpdate(p => p.Id,
                       new Contact { Id = Guid.Parse("{87E4CE1A-6345-4C56-B4CF-73D45C04B302}"), FirstName = "Fabian", LastName = "Raetz", Age = 23 },
                       new Contact { Id = Guid.Parse("{549C4F72-680E-45DA-8415-9C496A67BFD6}"), FirstName = "Fabian", LastName = "Raetz", Age = 23 },
                       new Contact { Id = Guid.Parse("{22E61696-608C-4B60-BFD4-B4A99EEB27BF}"), FirstName = "Fabian", LastName = "Raetz", Age = 23 },
                       new Contact { Id = Guid.Parse("{29E40070-899F-4B48-BF5F-9CF422E3756A}"), FirstName = "Fabian", LastName = "Raetz", Age = 23 },
                       new Contact { Id = Guid.Parse("{74A6B262-2307-4FF0-AC1C-32C47308B5C7}"), FirstName = "Fabian", LastName = "Raetz", Age = 23 },
                       new Contact { Id = Guid.Parse("{A2F10501-2FFF-46E4-B080-FC2CA34B9F99}"), FirstName = "Fabian", LastName = "Raetz", Age = 23 },
                       new Contact { Id = Guid.Parse("{0C50324E-2D52-435E-9070-B25868381F03}"), FirstName = "Fabian", LastName = "Raetz", Age = 23 },
                       new Contact { Id = Guid.Parse("{198B58CA-08BC-4DF1-AF1D-220EF7B7D0C6}"), FirstName = "Fabian", LastName = "Raetz", Age = 23 },
                       new Contact { Id = Guid.Parse("{6BED39D0-720B-4352-92B8-952C7E613EC9}"), FirstName = "Fabian", LastName = "Raetz", Age = 23 },
                       new Contact { Id = Guid.Parse("{53E98512-A77E-40F9-9BEC-4F2474C47D20}"), FirstName = "Fabian", LastName = "Raetz", Age = 23 },
                       new Contact { Id = Guid.Parse("{2707D1FE-08F0-4C4D-BCD2-0B2DDA7F5F24}"), FirstName = "Fabian", LastName = "Raetz", Age = 23 },
                       new Contact { Id = Guid.Parse("{F87F29CB-4096-4084-8151-879FFFD2FC40}"), FirstName = "Fabian", LastName = "Raetz", Age = 23 },
                       new Contact { Id = Guid.Parse("{9219D84B-B6BE-4D19-91BE-46856B31AAD8}"), FirstName = "Fabian", LastName = "Raetz", Age = 23 },
                       new Contact { Id = Guid.Parse("{AB3F4D93-DAD8-49C1-86A5-FC7AACDBD82E}"), FirstName = "Fabian", LastName = "Raetz", Age = 23 },
                       new Contact { Id = Guid.Parse("{F7E033CA-071F-48F9-9BDD-D64C26774453}"), FirstName = "Fabian", LastName = "Raetz", Age = 23 },
                       new Contact { Id = Guid.Parse("{3D293035-B8C8-4378-B841-2478BC9AE683}"), FirstName = "Fabian", LastName = "Raetz", Age = 23 },
                       new Contact { Id = Guid.Parse("{24FE4BDF-F9F8-41F2-8F96-9E6916C91E77}"), FirstName = "Fabian", LastName = "Raetz", Age = 23 },
                       new Contact { Id = Guid.Parse("{CFABE0B6-AE2D-491C-89F5-F3AB719FD31A}"), FirstName = "Fabian", LastName = "Raetz", Age = 23 },
                       new Contact { Id = Guid.Parse("{E684B213-259F-45BC-8EDB-922B2877781E}"), FirstName = "Fabian", LastName = "Raetz", Age = 23 },
                       new Contact { Id = Guid.Parse("{F36F18D3-10CE-4BD4-9EDA-A9E8401F1229}"), FirstName = "Fabian", LastName = "Raetz", Age = 23 },
                       new Contact { Id = Guid.Parse("{D34A1440-94BA-4EF9-A569-34FD93E9CEF7}"), FirstName = "Fabian", LastName = "Raetz", Age = 23 },
                       new Contact { Id = Guid.Parse("{7F1E7D11-05F5-4E5C-85D0-6551A441A8BA}"), FirstName = "Fabian", LastName = "Raetz", Age = 23 },
                       new Contact { Id = Guid.Parse("{68ED684C-9FAD-42A5-8CE4-03D677F1AD79}"), FirstName = "Fabian", LastName = "Raetz", Age = 23 },
                       new Contact { Id = Guid.Parse("{72812252-1920-4A77-8B5E-2C75C17FE7F7}"), FirstName = "Fabian", LastName = "Raetz", Age = 23 },
                       new Contact { Id = Guid.Parse("{55A4194B-9E6B-4A0A-8AF0-DD89946985D8}"), FirstName = "Fabian", LastName = "Raetz", Age = 23 });
        }
    }
}
