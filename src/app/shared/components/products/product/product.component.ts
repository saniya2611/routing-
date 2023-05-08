import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iproducts } from 'src/app/shared/model/products';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  productId !: number;
  getSingleProd !: Iproducts
  constructor(private _productsService:ProductsService,
    private _route:ActivatedRoute) { }

  ngOnInit(): void {
    this.productId = +this._route.snapshot.params['id']
    console.log(this.productId);
    this.getSingleProd = this._productsService.getSingleProduct(this.productId);
    console.log(this.getSingleProd);
    
  }

  
  
  

}
