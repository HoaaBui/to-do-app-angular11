import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';
import {UserService} from '../../service/userService';
import {User} from '../../models/userModel';

@Component({
  templateUrl: 'createUsers.component.html'
})
export class CreateUsersComponent {
  isCollapsed: boolean = false;
  iconCollapse: string = 'icon-arrow-up';
  model: any = {
    name: '',
    email: '',
    gender: '',
    age: 0,
    personalId: 0
  }
  
  constructor(private router: Router, private userService: UserService, private httpClient: HttpClient) { 

  }

  collapsed(event: any): void {
    // console.log(event);
  }

  expanded(event: any): void {
    // console.log(event);
  }

  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
    this.iconCollapse = this.isCollapsed ? 'icon-arrow-down' : 'icon-arrow-up';
  }

  goBackUserListPage() {
    this.router.navigate(['users/users']);
  }

  createUser() {
    var body = {
      name: this.model.name,
      email: this.model.email,
      gender: this.model.gender,
      age: String(this.model.age),
      personalId: String(this.model.personalId)      
    };

    this.userService.createUser(body).subscribe((res:any)=>{
      this.model = {
        name: '',
        email: '',
        gender: '',
        age: 0,
        personalId: 0
      };
      alert("Tạo user thành công");
    })
  }
}
