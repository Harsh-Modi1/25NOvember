import { Component, OnInit } from '@angular/core';
import { Products } from '../../../models/Products.model';
import { productservice } from '../../../services/productservice';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  compareBtn: string = 'Add to Compare';
  products: Products[] = new Array<Products>();
  productList: Products[] = [];
  constructor(private prodservice: productservice) { }

  ngOnInit(): void {
    this.prodservice.getProduct().subscribe((data: any) => {
      this.productList = data;
    });
  }
// calling the service from productservice.ts
  addtoCompare(productId) {
    this.prodservice.compareProduct(productId).subscribe((data: any) => {
      alert('Added to compared Product.');
    });
  }
}
