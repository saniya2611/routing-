import { Component, OnInit } from '@angular/core';
import { Iproducts } from '../../model/products';
import { ProductsService } from '../../services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
 productInfo : Array<Iproducts> = []
 selectedProdId !: number;
  constructor(
    private _productsService : ProductsService,
    private _router : Router) { }

  ngOnInit(): void {
    this.productInfo = this._productsService.getAllProduct();
    this.selectedProdId = this.productInfo[0].pId
  }

  onUserClick(){
    this._router.navigate(['users'])
  }

}
