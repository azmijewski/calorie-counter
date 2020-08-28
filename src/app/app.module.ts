import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainPageComponent } from './main-page/main-page.component';
import { ContentPageComponent } from './content-page/content-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MyCaloriesPageComponent } from './my-calories-page/my-calories-page.component';
import { ProductsPageComponent } from './products-page/products-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ContentPageComponent,
    LoginPageComponent,
    MyCaloriesPageComponent,
    ProductsPageComponent,
    RegisterPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
