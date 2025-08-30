# RealEstateSearchPortal


This project is a full-stack web application built with:

Backend: ASP.NET Core Web API

Frontend: Next.js
 with React & TypeScript

Database: SQL Server


If your database doesn’t exist yet

First, create an initial migration:

dotnet ef migrations add InitialCreate


Then apply it to the database:

dotnet ef database update


Backend will be available at:
👉 https://localhost:44350 (Base URL)
👉 https://localhost:44350/swagger – Explore API docs & test endpoints

But change or 
Update API base URL in frontend (frontend/utils/api.ts or .env.local):

NEXT_PUBLIC_API_URL=https://localhost:44350/api



