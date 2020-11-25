import { Component, OnInit } from '@angular/core';
import { productservice } from '../../../services/productservice';
import { CartModel } from '../../../models/Cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartTotal = 0;
  cartModel: CartModel[] = new Array<CartModel>();

  constructor(private prodservice: productservice) { }

  ngOnInit(): void {
    debugger;
    let userId = Number(sessionStorage.getItem('userId'));
    this.prodservice.getCartProduct(userId).subscribe((data: any) => {
      debugger;
      this.cartModel = data;
    });
  }
}
