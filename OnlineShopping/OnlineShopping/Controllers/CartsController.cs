using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using OnlineShopping.Models;

namespace OnlineShopping.Controllers
{
    public class CartsController : ApiController
    {
        private DbonlineshoppingEntities db = new DbonlineshoppingEntities();

        #region Cart
        [HttpGet]
        public IHttpActionResult GetCart(int userId)
        {
            var products = db.Carts.Where(w => w.UserID == userId).Select(s => new CartModel()
            {
                ProductDescription = s.Product.ProductDescription,
                ProductCode = s.Product.ProductCode,
                ProductName = s.Product.ProductName,
                Quantity = s.Quantity,
                ProductPrice = s.Product.ProductPrice,
                ProductID = s.Product.ProductID,
                TotalPrice = s.TotalPrice
            }).ToList();
            return Ok(products);
        }

        public IHttpActionResult AddToCart(Cart cart)
        {
            Cart objcl = new Cart();
            objcl.ProductID = cart.ProductID;
            objcl.Quantity = cart.Quantity;
            objcl.TotalPrice = cart.TotalPrice * cart.Quantity;
            objcl.UserID = cart.UserID;
            db.Carts.Add(objcl);
            db.SaveChanges();
            return Ok("Success");
        }
        #endregion


    }
}