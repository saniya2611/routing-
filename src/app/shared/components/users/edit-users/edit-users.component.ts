import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Iusers } from 'src/app/shared/model/users';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.scss']
})
export class EditUsersComponent implements OnInit {
  userId !: number;
  selectedUser  !: Iusers;
  constructor(private _route:ActivatedRoute,
    private _usersService : UsersService,
    private _router : Router) { }

  ngOnInit(): void {
    this.userId = +this._route.snapshot.params['userId'];
    console.log(this.userId);
    
    this.selectedUser = this._usersService.getSingleUserM(this.userId)!
    console.log(this.selectedUser);
    }

    onupdateUser(userName:HTMLInputElement){
        let userObj:Iusers={
          userName : userName.value,
          id : this.userId
        }
        console.log(userObj)
        this._usersService.getUpdatedUser(userObj)
        this._router.navigate(['/users'])
    }
        
}
