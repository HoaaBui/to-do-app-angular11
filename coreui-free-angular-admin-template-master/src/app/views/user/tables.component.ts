import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';
import {UserService} from '../../service/userService';
import {User} from '../../models/userModel';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'tables.component.html'
})
export class TablesComponent implements OnInit {
  users: User[] = [];

  constructor(private http: HttpClient, private userService: UserService, private router: Router) {

  }

  ngOnInit() : void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.userService.getAllUsers().subscribe((res:any)=>{
      this.users = res;
    })
  }

  deleteUser(id:String) {
    var isSuccess;
    this.userService.deleteUser(id).subscribe((res:any)=>{
      isSuccess = res;
      for(let i in this.users) {
        if(this.users[i]._id === id){
          this.users.splice(Number(i),1);
        }
      }
    })
  }

  updateUser(id:String) {
    this.router.navigate(["users/users/update-user", id]);
  }
}
