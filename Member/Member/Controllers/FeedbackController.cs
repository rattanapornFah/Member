﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Member.Controllers
{
    public class FeedbackController : Controller
    {
        // GET: Feedback
        public ActionResult Feedback()
        {
            return View();
        }
    }
}