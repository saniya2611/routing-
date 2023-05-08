import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iusers } from 'src/app/shared/model/users';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  userId !: number; 
  getSingleUser !: Iusers
  constructor(private _router : ActivatedRoute,
    private _usersService :UsersService) { }

  ngOnInit(): void {
    this.userId = +this._router.snapshot.params['userId'];
    console.log(this.userId)
    this.getSingleUser = this._usersService.getSingleUserM(this.userId)!;
    console.log(this.getSingleUser);
    
  }

}
// ngOnInit(): void {
//   this.productId = +this._route.snapshot.params['id']
//   console.log(this.productId);
//   this.getSingleProd = this._productsService.getSingleProduct(this.productId);
//   console.log(this.getSingleProd);
  
// }

// productId !: number;
// getSingleProd !: Iproducts
// constructor(private _productsService:ProductsService,
//   private _route:ActivatedRoute) { }

