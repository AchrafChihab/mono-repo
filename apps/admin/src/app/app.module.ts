import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { NxWelcomeComponent } from './nx-welcome.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListCategoryComponent } from './pages/list-category/list-category.component';
import { AddCategoryComponent } from './pages/add-category/add-category.component';
import { EditCategoryComponent } from './pages/edit-category/edit-category.component';
import { ListProductComponent } from './pages/list-product/list-product.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { EditProductComponent } from './pages/edit-product/edit-product.component';
import { ListUsersComponent } from './pages/list-users/list-users.component';
import { AddUserComponent } from './pages/add-user/add-user.component';
import { EditUserComponent } from './pages/edit-user/edit-user.component';
import { ListOrdersComponent } from './pages/list-orders/list-orders.component';
import { AuthGuard, AuthInterceptor, UsersModule } from '@medcoding/users';


@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, DashboardComponent, ListCategoryComponent, AddCategoryComponent, EditCategoryComponent, ListProductComponent, AddProductComponent, EditProductComponent, ListUsersComponent, AddUserComponent, EditUserComponent, ListOrdersComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    UsersModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    FormsModule,
  ],
  providers: [AuthGuard, {provide : HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent],
})
export class AppModule {}
