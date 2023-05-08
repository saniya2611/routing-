import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { UsersComponent } from './shared/components/users/users.component';
import { ProductsComponent } from './shared/components/products/products.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { UserComponent } from './shared/components/users/user/user.component';
import { ProductComponent } from './shared/components/products/product/product.component';
import { EditProductComponent } from './shared/components/products/edit-product/edit-product.component';
import { EditUsersComponent } from './shared/components/users/edit-users/edit-users.component';

const routes: Routes = [
  {
    path : '' , component : DashboardComponent
  },
  // {
  //   path : '' , redirectTo : 'home', pathMatch : 'full'
  // },
  // {
  //   path : 'home' , component : DashboardComponent
  // },
  {
    path : 'users' , component : UsersComponent
  },
  {
    path: 'users/:userId'  ,component :UserComponent
  },
  {
    path: 'users/:userId/edit'  ,component :EditUsersComponent
  },
  {
    path : 'products', component : ProductsComponent
  },
  {
    path : 'products/:id' , component : ProductComponent
  },
   {
    path : 'products/:productsId/edit' , component : EditProductComponent
  },
  // {
  //   path : "**" , redirectTo : "pagenotfound"
  // },
  // {
  //   path : 'pagenotfound', component : PageNotFoundComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
