# RealEstateSearchPortal


If your database doesn’t exist yet

First, create an initial migration:

dotnet ef migrations add InitialCreate


Then apply it to the database:

dotnet ef database update
