import { Component } from '@angular/core';
import { FormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { Users } from 'libs/shared/src/lib/models/users';
import { UsersService } from 'libs/shared/src/lib/services/users.service';
import { Location } from "@angular/common";

@Component({
  selector: 'admin-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

  userForm = new FormGroup({
    name: new UntypedFormControl('', [Validators.required]),
    email: new UntypedFormControl('', [Validators.required]),
    password: new UntypedFormControl('', [Validators.required]),
    isAdmin: new UntypedFormControl('', [Validators.required]),
    address: new UntypedFormControl('', [Validators.required]),
    city: new UntypedFormControl('', [Validators.required]),
    country: new UntypedFormControl('', [Validators.required]),
    phone: new UntypedFormControl('', [Validators.required])
})

constructor(private userservice: UsersService, private location: Location) {}

users:Users[]=[]

saveUser() {
  this.userservice.addUsers(this.userForm.value).subscribe(res => {
    console.log(this.userForm.value, 'heeeeeeeeeeeere')
    if(res.success) {
     this.location.back()
    }
  },
  err => console.error(err))
}

}
