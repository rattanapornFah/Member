﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Member.Controllers
{
    public class RegisterController : Controller
    {
        // GET: Register
        public ActionResult register()
        {
            return View();
        }
    }
}