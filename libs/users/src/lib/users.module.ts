import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { usersRoutes } from './lib.routes';
import { SigninComponent } from './components/signin/signin.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [CommonModule,ReactiveFormsModule, RouterModule, HttpClientModule, RouterModule.forChild(usersRoutes)],
  declarations: [
    SigninComponent,
  ],
})
export class UsersModule {}
