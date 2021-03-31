import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';
import {UserService} from '../../service/userService';
import {User} from '../../models/userModel';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: 'updateUsers.component.html'
})
export class UpdateUsersComponent implements OnInit{
  isCollapsed: boolean = false;
  iconCollapse: string = 'icon-arrow-up';
  model: any = {
    name: '',
    email: '',
    gender: '',
    age: 0,
    personalId: 0,
    _id: ''
  }
  userId: String = "";
  
  constructor(private router: Router, private userService: UserService, private httpClient: HttpClient, private route: ActivatedRoute) { 
    route.params.subscribe(params => { this.userId = params['id']; });
  }

  ngOnInit() : void {
    this.getUser();
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

  updateUser() {
    var body = {
      name: this.model.name,
      email: this.model.email,
      gender: this.model.gender,
      age: String(this.model.age),
      personalId: String(this.model.personalId),
      _id: this.model._id      
    };

    this.userService.updateUser(body).subscribe((res:any)=>{
      this.model = {
        name: '',
        email: '',
        gender: '',
        age: 0,
        personalId: 0,
        _id: ''
      };
      alert("Cập nhật user thành công");
    })
  }

  getUser() {
    this.userService.getUser(this.userId).subscribe((res:any)=>{
      this.model = res;
    })
  }

}
