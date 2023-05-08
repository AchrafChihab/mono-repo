import { Component, OnInit } from '@angular/core';
import { FormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { UsersService } from 'libs/shared/src/lib/services/users.service';
import { Location } from '@angular/common'

@Component({
  selector: 'admin-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit{


  id: string = ""
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

  constructor(private userService: UsersService, private route: ActivatedRoute, private location: Location) {}

  ngOnInit(): void {
      this.route.params.subscribe((params: any) => {
          this.userService.getUsers(params.id).subscribe(res => {
            this.id = params.id
            this.userForm.patchValue(res.users)
          })
      })
  }

  submit(form: FormGroup) {

    if(form.invalid) {
      return
    }

    this.updateCategory()

  }

  updateCategory() {
    this.userService.updateUsers(this.id, this.userForm.value).subscribe(res => {
      if(res.success) {
       this.location.back()
      }
    },
    err => console.error(err))
  }

}
