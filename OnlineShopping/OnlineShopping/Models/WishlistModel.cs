using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace OnlineShopping.Models
{
    public class WishlistModel
    {
        public int WishListID { get; set; }
        public Nullable<int> ProductID { get; set; }
        public Nullable<int> UserID { get; set; }

    }
}