using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using JapaxCourierWebsite.Models;

namespace JapaxCourierWebsite.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }
        public IActionResult Index()
        {
            return View();
        }
        public IActionResult Service()
        {
            return View();
        }
        public IActionResult ServicesCommon()
        {
            return View();
        }
        public IActionResult Index2()
        {
            return View();
        }
        public IActionResult Index3()
        {
            return View();
        }
        public IActionResult Index4()
        {
            return View();
        }
        public IActionResult Index5()
        {
            return View();
        }
        public IActionResult Index6()
        {
            return View();
        }      
        public IActionResult Index7()
        {
            return View();
        }
        [ActionName("service-common")]
        public IActionResult ServiceCommon()
        {
            return View();
        }
        public IActionResult About()
        {
            return View();
        }
        public IActionResult Pricing()
        {
            return View();
        }
        public IActionResult contact()
        {
            return View();
        }
        public IActionResult blog()
        {
            return View();
        }
        public IActionResult map()
        {
            return View();
        }
        [ActionName("pickup-drop")]
        public IActionResult PickupDrop()
        {
            return View();
        }
        [ActionName("online-service")]
        public IActionResult OnlineService()
        {
            return View();
        }
        [ActionName("realtime-tracking")]
        public IActionResult RealtimeTracking()
        {
            return View();
        }
        [ActionName("packaging-service")]
        public IActionResult PackagingService()
        {
            return View();
        }
        [ActionName("food-delivery")]
        public IActionResult foodDelivery()
        {
            return View();
        }
        [ActionName("ondemand-service")]
        public IActionResult onDemandService()
        {
            return View();
        }

        [ActionName("fulfillment-service")]
        public IActionResult fulfillment()
        {
            return View();
        }
        public IActionResult Warehouse()
        {
            return View();
        }
        public IActionResult Privacy()
        {
            return View();
        }
        [ActionName("coming-soon")]
        public IActionResult ComingSoon(string value)
        {
            ViewBag.value = value;
            return View();
        }
        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
