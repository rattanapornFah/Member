﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Member.Controllers
{
    public class NewsController : Controller
    {
        // GET: News
        public ActionResult News()
        {
            return View();
        }
        public ActionResult Unread()
        {
            return View();
        }
        public ActionResult Detail()
        {
            return View();
        }


    }
}