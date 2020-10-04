import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MainPageComponent} from './main-page/main-page.component';
import {ContentPageComponent} from './content-page/content-page.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {MyCaloriesPageComponent} from './my-calories-page/my-calories-page.component';
import {ProductsPageComponent} from './products-page/products-page.component';
import {RegisterPageComponent} from './register-page/register-page.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {AppRoutingModule} from './app-routing.module';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatNativeDateModule} from '@angular/material/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {MyDataPageComponent} from './my-data-page/my-data-page.component';
import {ArticlesPageComponent} from './articles-page/articles-page.component';
import {AddProductDialogComponent} from './dialogs/add-product-dialog/add-product-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {AddCalorieProductDialogComponent} from './dialogs/add-calorie-product-dialog/add-calorie-product-dialog.component';
import {EditAccountDialogComponent} from './dialogs/edit-account-dialog/edit-account-dialog.component';
import {DeleteAccountDialogComponent} from './dialogs/delete-account-dialog/delete-account-dialog.component';
import {ChangePasswordDialogComponent} from './dialogs/change-password-dialog/change-password-dialog.component';
import {AuthInterceptor} from './services/auth-interceptor';
import localePl from '@angular/common/locales/pl';
import {registerLocaleData} from '@angular/common';
import {AccountConfirmationPageComponent} from './account-confirmation-page/account-confirmation-page.component';
import { ModifyUserProductComponent } from './dialogs/modify-user-product/modify-user-product.component';
import { ArticleListPageComponent } from './article-list-page/article-list-page.component';
import { ResultDialogComponent } from './dialogs/result-dialog/result-dialog.component';
import { MealsListPageComponent } from './meals-list-page/meals-list-page.component';
import { AddMealDialogComponent } from './dialogs/add-meal-dialog/add-meal-dialog.component';
import { MealPageComponent } from './meal-page/meal-page.component';
import { EditMealDialogComponent } from './dialogs/edit-meal-dialog/edit-meal-dialog.component';
import { AddMealToUserProductsDialogComponent } from './dialogs/add-meal-to-user-products-dialog/add-meal-to-user-products-dialog.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
registerLocaleData(localePl);

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ContentPageComponent,
    LoginPageComponent,
    MyCaloriesPageComponent,
    ProductsPageComponent,
    RegisterPageComponent,
    MyDataPageComponent,
    ArticlesPageComponent,
    AddProductDialogComponent,
    AddCalorieProductDialogComponent,
    EditAccountDialogComponent,
    DeleteAccountDialogComponent,
    ChangePasswordDialogComponent,
    AccountConfirmationPageComponent,
    ModifyUserProductComponent,
    ArticleListPageComponent,
    ResultDialogComponent,
    MealsListPageComponent,
    AddMealDialogComponent,
    MealPageComponent,
    EditMealDialogComponent,
    AddMealToUserProductsDialogComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    FormsModule,
    MatPaginatorModule,
    NoopAnimationsModule,
    MatNativeDateModule,
    HttpClientModule,
    MatDialogModule,
    NgbModule,
  ],
  entryComponents: [
    AddProductDialogComponent,
    AddCalorieProductDialogComponent,
    EditAccountDialogComponent,
    DeleteAccountDialogComponent,
    ChangePasswordDialogComponent
  ],
  providers: [MatDatepickerModule,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }, {
      provide: LOCALE_ID,
      useValue: 'pl'
    }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
