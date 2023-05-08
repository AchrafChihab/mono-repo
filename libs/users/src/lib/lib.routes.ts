import { Component } from '@angular/core';
import { Route } from '@angular/router';
import { SigninComponent } from './components/signin/signin.component';

export const usersRoutes: Route[] = [
  {path:'login', component: SigninComponent}
];
