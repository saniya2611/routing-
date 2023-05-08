import { Injectable } from '@angular/core';
import { Iusers } from '../model/users';
import { SnackbarService } from './snackbar.service'

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  usersArray : Array<Iusers> = [
    {
      userName : "Virat",
      id : 123
    },
    {
      userName : "Shubhaman",
      id : 246
    },
    {
      userName : "Rohit",
      id : 369
    },
    {
      userName : "Hardik",
      id : 482
    }
  ]
  constructor(private _snackbarService:SnackbarService) { }

  getAllusers() : Array<Iusers>{
    return this.usersArray
  }


  getSingleUserM(id:number):Iusers{
   return this.usersArray.find(user =>  user.id === id)!
   }

   getUpdatedUser(useObj:Iusers){
    this.usersArray.forEach(user =>{
      if(user.id === useObj.id){
        user.userName = useObj.userName
      }
    })
    this._snackbarService.openSnackBar(`${useObj.userName} is successfully updated`)
   }
}
