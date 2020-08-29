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
import {RouterModule} from '@angular/router';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatNativeDateModule} from '@angular/material/core';
import {HttpClientModule} from '@angular/common/http';
import {MyDataPageComponent} from './my-data-page/my-data-page.component';
import {ArticlesPageComponent} from './articles-page/articles-page.component';

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
    ArticlesPageComponent
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
    HttpClientModule
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
