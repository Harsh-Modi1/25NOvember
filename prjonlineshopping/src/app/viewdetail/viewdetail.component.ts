import { Component, OnInit } from '@angular/core';
import { Products } from '../models/Products.model';
import { productservice } from '../services/productservice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewdetail',
  templateUrl: './viewdetail.component.html',
  styleUrls: ['./viewdetail.component.css']
})
export class ViewdetailComponent implements OnInit {
  product: Products = new Products();
  constructor(private prodservice: productservice, private router: Router) { }

  ngOnInit(): void {
    let url = this.router.url;
    this.prodservice.getProductbyid(Number(url.split('/')[2])).subscribe((data: any) => {
      this.product = data;
    });
  }

  AddToCart(productModel) {
    debugger;
    if (!sessionStorage.getItem('userId')) {
      this.router.navigate(['login']);
      alert('Login first to add to Cart.');
      return;
    }
    let model = {
      ProductID: productModel.ProductID,
      TotalPrice: productModel.ProductPrice,
      Quantity: 1,
      UserID: sessionStorage.getItem('userId')
    };
    this.prodservice.AddToCart(model).subscribe((response: any) => {
      if (response == "Success") {
        alert('Product Successfully added to cart.');
      }
    });
  }


}
