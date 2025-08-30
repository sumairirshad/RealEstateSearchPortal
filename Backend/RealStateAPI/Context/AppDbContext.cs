using Microsoft.EntityFrameworkCore;
using RealStateAPI.AppVars;
using RealStateAPI.Models;
using System.Collections.Generic;
using System.Reflection.Emit;

namespace RealStateAPI.Context
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Users> Users { get; set; }
        public DbSet<Properties> Properties { get; set; }
        public DbSet<Favourites> Favourites { get; set; }

        public static void Seed(AppDbContext context)
        {
            if (!context.Properties.Any())
            {
                var user = new Users
                {
                    Email = "admin@example.com",
                    PasswordHash = ReusableMethods.HashPassword("123456"),
                    CreatedAt = DateTime.UtcNow
                };
                context.Users.Add(user);
                context.SaveChanges();

                var properties = new List<Properties>
                {
                    new Properties
                    {
                        Title = "Renovated 3BR Home in Converse, TX",
                        Descritption = "Recently Renovated, cul-de-sac, No HOA, No city Tax, Lowest Tax rate in Bexar County 1.8%, New AC Unit, No Carpet downstair, All appliances convey. Steel Appliances, 3 bedrooms 2.5 baths 2 car garage, 1963 sq.ft. 9016 lot size, in a quiet neighborhood with a large backyard for kids to play, beautiful patio decking, and generous shade from mature trees. Book your appointment today! It won't last long!",
                        Address = "2059 Powell Place, Converse, TX 78109",
                        listingType = 1,
                        Bedrooms = 3,
                        Bathrooms = 2,
                        Carspots = 2,
                        ImageUrl = "https://prod.rockmedialibrary.com/api/public/content/c75dce0bc2714ce8b23c20fb49628bfa?v=5fdae3b6",
                        CreatedAt = DateTime.Now,
                        Price = 25630000,
                        UserId = user.Id
                    },
                    new Properties
                    {
                        Title = "Modern Townhome in Washington, DC",
                        Descritption = "Address 1: Building Number: 1776 Street Name: Constitution Ave NW Street Address: Lincoln Memorial State: DC City: Washington Post Code: 20006",
                        Address = "1776 Constitution Ave NW, Washington, DC 20006",
                        listingType = 1,
                        Bedrooms = 1,
                        Bathrooms = 1,
                        Carspots = 1,
                        ImageUrl = "https://hips.hearstapps.com/hmg-prod/images/hbx110119wholehome-019-copy-1569949392.jpg",
                        CreatedAt = DateTime.Now,
                        Price = 3260000,
                        UserId = user.Id
                    },
                    new Properties
                    {
                        Title = "Spacious Family Home with Patio & Yard",
                        Descritption = "Great for families! Large backyard, mature trees, and peaceful neighborhood. Includes all modern appliances and deck.",
                        Address = "512 Treeview Ln, San Antonio, TX 78240",
                        listingType = 1,
                        Bedrooms = 4,
                        Bathrooms = 3,
                        Carspots = 2,
                        ImageUrl = "https://assets-news.housing.com/news/wp-content/uploads/2022/03/31010142/Luxury-house-design-Top-10-tips-to-add-luxury-to-your-house-FEATURE-compressed.jpg",
                        CreatedAt = DateTime.Now,
                        Price = 18750000,
                        UserId = user.Id
                    },
                    new Properties
                    {
                        Title = "Minimalist Downtown Apartment",
                        Descritption = "Ideal for single professionals. Walking distance to shopping, metro, and restaurants.",
                        Address = "1501 Commerce St, Dallas, TX 75201",
                        listingType = 1,
                        Bedrooms = 1,
                        Bathrooms = 1,
                        Carspots = 0,
                        ImageUrl = "https://www.bhg.com/thmb/TD9qUnFen4PBLDuB2hn9yhGXPv8=/1866x0/filters:no_upscale():strip_icc()/white-house-a-frame-section-c0a4a3b3-e722202f114e4aeea4370af6dbb4312b.jpg",
                        CreatedAt = DateTime.Now,
                        Price = 9400000,
                        UserId = user.Id
                    }
                };
                context.Properties.AddRange(properties);
                context.SaveChanges();
            }
        }
    }
}
