import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import { MainPageComponent } from './main-page/main-page.component';
import { ContentPageComponent } from './content-page/content-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MyCaloriesPageComponent } from './my-calories-page/my-calories-page.component';
import { ProductsPageComponent } from './products-page/products-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {AppRoutingModule} from './app.routing.module';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatNativeDateModule} from '@angular/material/core';
import {HttpClientModule} from '@angular/common/http';
import {MyDataPageComponent} from './my-data-page/my-data-page.component';
import {ArticlesPageComponent} from './articles-page/articles-page.component';
import {AddProductDialogComponent} from './dialogs/add-product-dialog/add-product-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {AddCalorieProductDialogComponent} from './dialogs/add-calorie-product-dialog/add-calorie-product-dialog.component';
import {EditAccountDialogComponent} from './dialogs/edit-account-dialog/edit-account-dialog.component';
import {DeleteAccountDialogComponent} from './dialogs/delete-account-dialog/delete-account-dialog.component';
import {ChangePasswordDialogComponent} from './dialogs/change-password-dialog/change-password-dialog.component';

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
    ChangePasswordDialogComponent
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
  ],
  entryComponents: [
    AddProductDialogComponent,
    AddCalorieProductDialogComponent,
    EditAccountDialogComponent,
    DeleteAccountDialogComponent,
    ChangePasswordDialogComponent
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
