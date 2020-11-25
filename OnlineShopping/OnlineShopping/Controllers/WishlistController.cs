using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using OnlineShopping.Models;

namespace OnlineShopping.Controllers
{
    public class WishlistController : ApiController
    {
        DbonlineshoppingEntities db = new DbonlineshoppingEntities();

        [HttpPost]
        public IHttpActionResult WishlistProduct(WishlistModel wishlist)
        {
            return Ok();
        }
    }
}
