import {RouterModule, Routes} from '@angular/router';
import {ContentPageComponent} from './content-page/content-page.component';
import {MyCaloriesPageComponent} from './my-calories-page/my-calories-page.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {RegisterPageComponent} from './register-page/register-page.component';
import {ProductsPageComponent} from './products-page/products-page.component';
import {NgModule} from '@angular/core';
import {AuthGuardService} from './services/auth-guard.service';

const routes: Routes = [{
    path: '',
    component: ContentPageComponent
  },
  {
    path: 'calories',
    component: MyCaloriesPageComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'register',
    component: RegisterPageComponent
  },
  {
    path: 'products',
    component: ProductsPageComponent
  }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
}
) export class AppRoutingModule {}

