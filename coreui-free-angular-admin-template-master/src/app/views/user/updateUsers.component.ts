import { Component } from '@angular/core';

@Component({
  templateUrl: 'updateUsers.component.html'
})
export class UpdateUsersComponent {
  isCollapsed: boolean = false;
  iconCollapse: string = 'icon-arrow-up';
  
  constructor() { 

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

}
