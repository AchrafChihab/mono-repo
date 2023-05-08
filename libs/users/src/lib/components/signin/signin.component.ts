import { StorageService } from './../../services/storage.service';
import { FormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthResponse } from '../../models/authResponse';

@Component({
  selector: 'users-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  constructor (private AuthService:AuthService, private StorageService:StorageService){}

  authError = false
  messageError= "Error is from the server , please try again"
  loginForm = new FormGroup({
    email: new UntypedFormControl('',Validators.required),
    password: new UntypedFormControl('',Validators.required)
  })


  singIN(email: string, password: string){
    this.AuthService.login(email,password).subscribe({
      next :  (res:AuthResponse)=>{console.log(res),
      this.authError= false,
      this.loginForm.reset()

      this.StorageService.setToken(res.token)

      },

      error : (err : HttpErrorResponse)=> {
        this.authError= true
        if (err.status == 400) {

          this.messageError = err.error.message
        }
      },

      }

    )
  }

  submit(){
    // console.log(this.loginForm);

    if(this.loginForm.invalid){
      return ;
    }

    this.singIN(this.form.email.value, this.form.password.value)

  }

  get form(){
    return this.loginForm.controls
  }


}
