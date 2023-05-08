import { Route } from '@angular/router';

import { AddCategoryComponent } from './pages/add-category/add-category.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListCategoryComponent } from './pages/list-category/list-category.component';
import { EditCategoryComponent } from './pages/edit-category/edit-category.component';
import { ListProductComponent } from './pages/list-product/list-product.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { EditProductComponent } from './pages/edit-product/edit-product.component';
import { ListUsersComponent } from './pages/list-users/list-users.component';
import { EditUserComponent } from './pages/edit-user/edit-user.component';
import { AddUserComponent } from './pages/add-user/add-user.component';
import { ListOrdersComponent } from './pages/list-orders/list-orders.component';
import { AuthGuard } from '@medcoding/users';

export const appRoutes: Route[] = [
    {path: 'admin', component: DashboardComponent , canActivate:[AuthGuard]},
    {
        path: 'admin/category',
        component: ListCategoryComponent,
        canActivate:[AuthGuard]
    },
    {
      path: 'admin/products',
      component: ListProductComponent,
      canActivate:[AuthGuard]
    },
    {
      path: 'admin/users',
      component: ListUsersComponent,
      canActivate:[AuthGuard]
  },
  {
    path: 'admin/orders',
    component: ListOrdersComponent,
    canActivate:[AuthGuard]
},
    {
        path: 'admin/addCategory',
        component: AddCategoryComponent,
        canActivate:[AuthGuard]
    },
    {
      path: 'admin/addProduct',
      component: AddProductComponent,
      canActivate:[AuthGuard]
    },
    {
      path: 'admin/addUser',
      component: AddUserComponent,
      canActivate:[AuthGuard]
    },
    {
        path: 'admin/category/edit/:id',
        component: EditCategoryComponent,
        canActivate:[AuthGuard]
    },
    {
      path: 'admin/product/edit/:id',
      component: EditProductComponent,
      canActivate:[AuthGuard]
    },
    {
      path: 'admin/user/edit/:id',
      component: EditUserComponent,
      canActivate:[AuthGuard]
    }

];
