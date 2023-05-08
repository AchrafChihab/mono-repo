// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { UsersService } from './../../../../../../libs/shared/src/lib/services/users.service';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { ResUsers, Users } from './../../../../../../libs/shared/src/lib/models/users';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'admin-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit{

  users: Users[] = []

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
      this.getUsers()
  }

  getUsers() {
    this.usersService.getAllUsers().subscribe(({success, users}: ResUsers) => {
      if(success) {
        this.users = users
      }
    })
  }

  deleteUser(id:string ){
    this.usersService.deleteUsers(id).subscribe(()=>{
      this.getUsers();
    })
  }

}
