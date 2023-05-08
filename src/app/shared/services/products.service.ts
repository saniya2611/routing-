import { Injectable } from '@angular/core';
import { Iproducts } from '../model/products';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productsArray : Array<Iproducts> =[
    {
      pName : "Oppo",
      pId   : 1 ,
      pStatus : "Dispatched"
    },
    {
      pName : "Vivo",
      pId   : 2 ,
      pStatus : "Delivered"
    },
    {
      pName : "Xiomi",
      pId   : 3 ,
      pStatus : "In-progress"
    },
    {
      pName : "Apple",
      pId   : 4 ,
      pStatus : "Dispatched"
    },
    {
      pName : "Samsung",
      pId   : 5 ,
      pStatus : "In-progress"
    },
   ]
  constructor(private _snackbarService:SnackbarService) { }

  getAllProduct(){
     return this.productsArray;
  }

 getSingleProduct(pId:number):Iproducts{
  console.log(this.productsArray.find(prod => prod.pId === pId)!)
   return this.productsArray.find(prod => prod.pId === pId)!;
  

  }

  updateProduct(pObj : Iproducts){
    this.productsArray.forEach(prod => {
      if(prod.pId === pObj.pId){
        prod.pName = pObj.pName,
        prod.pStatus = pObj.pStatus
      }
    })
    this._snackbarService.openSnackBar(`${pObj.pName} is successfully updated`)
  }
}
