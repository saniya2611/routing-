import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproducts, Ipstatus } from 'src/app/shared/model/products';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  productId !: number;
  selectedProduct !: Iproducts;
  constructor(private _route:ActivatedRoute,
    private _productsService : ProductsService,
    private _router:Router) { }

  ngOnInit(): void {
    console.log(this._route.snapshot.params)
    this.productId = +this._route.snapshot.params['productsId'];
    this.selectedProduct = this._productsService.getSingleProduct(this.productId)!;
    console.log(this.selectedProduct);
  }

  onProductUpdate(pName:HTMLInputElement,pStatus:HTMLSelectElement){
    let obj = {
      pName : pName.value,
      pStatus : pStatus.value as Ipstatus,
      pId : this.productId
    }
    this._productsService.updateProduct(obj);
    this._router.navigate(['/products'])
  }
}
