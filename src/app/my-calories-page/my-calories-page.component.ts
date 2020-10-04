import {Component, Inject, LOCALE_ID, OnInit} from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormControl} from '@angular/forms';
import {UserProductWebService} from '../services/web/user-product-web.service';
import {UserProduct} from '../model/user-product';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {AddCalorieProductDialogComponent} from '../dialogs/add-calorie-product-dialog/add-calorie-product-dialog.component';
import {NewUserProduct} from '../model/new-user-product';
import {formatDate} from '@angular/common';
import {DeleteUserProduct} from '../model/delete-user-product';
import {ModifyUserProductComponent} from '../dialogs/modify-user-product/modify-user-product.component';
import {ModifyUserProduct} from '../model/modify-user-product';
import {AddMealToUserProductsDialogComponent} from '../dialogs/add-meal-to-user-products-dialog/add-meal-to-user-products-dialog.component';
import {NewUserMeal} from '../model/new-user-meal';

@Component({
  selector: 'app-my-calories-page',
  templateUrl: './my-calories-page.component.html',
  styleUrls: ['./my-calories-page.component.css']
})
export class MyCaloriesPageComponent implements OnInit {


  date = new Date();
  userProducts = new Array<UserProduct>();
  totalCalories = 0;
  calorieGoal = 0;
  difference = 0;

  constructor(private userProductService: UserProductWebService,
              private dialog: MatDialog,
              @Inject(LOCALE_ID) private locale) {
  }

  ngOnInit(): void {
    this.loadUsersProducts(this.date);
  }


  click(): void {
    console.log('Wybrana data: ' + this.date);
    this.loadUsersProducts(this.date);
  }

  loadUsersProducts(date: Date): void {
    this.userProductService.loadUserProducts(date).subscribe(data => {
      this.userProducts = data.products;
      this.totalCalories = data.totalCalories;
      this.calorieGoal = data.calorieGoal;
      this.difference = data.difference;
    });
  }

  addProduct(): void {
    const dialog = this.dialog.open(AddCalorieProductDialogComponent, {
      width: '700px'
    });
    dialog.afterClosed().subscribe(data => {
      if (data) {
        const newUserProduct: NewUserProduct = {
          productId: data.productId,
          weight: data.weight,
          date: formatDate(this.date, 'yyyy-MM-dd', this.locale)
        };
        this.userProductService.addProduct(newUserProduct).subscribe(response => {
          this.loadUsersProducts(this.date);
        });
      }
    });
  }

  delete(product: UserProduct): void {
    const deleteUserProduct: DeleteUserProduct = {
      productId: product.productId,
      date: formatDate(this.date, 'yyyy-MM-dd', this.locale)
    };
    this.userProductService.deleteUserProduct(deleteUserProduct).subscribe(response => {
      this.loadUsersProducts(this.date);
    });
  }

  edit(product: UserProduct): void {
    const dialog = this.dialog.open(ModifyUserProductComponent, {
      width: '700px',
      data: product.weight
    });
    dialog.afterClosed().subscribe(data => {
      if (data) {
        const modifyUserProduct: ModifyUserProduct = {
          productId: product.productId,
          date: formatDate(this.date, 'yyyy-MM-dd', this.locale),
          newWeight: data
        };
        this.userProductService.modifyUserProduct(modifyUserProduct).subscribe(response => {
          this.loadUsersProducts(this.date);
        });
      }
    });
  }

  addMeal(): void {
    const dialog = this.dialog.open(AddMealToUserProductsDialogComponent, {
      width: '700px',
    });
    dialog.afterClosed().subscribe(data => {
      if (data) {
        const userMeal: NewUserMeal = {
          mealId: data,
          date: formatDate(this.date, 'yyyy-MM-dd', this.locale)
        };
        this.userProductService.addMeal(userMeal).subscribe(response => {
          this.loadUsersProducts(this.date);
        });
      }
    });
  }

  getPercentage(): number {
    return Math.floor(this.totalCalories / this.calorieGoal * 100);
  }

  getType(): string {
    console.log(this.getPercentage());
    if (this.getPercentage() < 90) {
      return 'success';
    } else if (this.getPercentage() <= 100) {
      return 'info';
    } else if (this.getPercentage() < 105) {
      return 'warning';
    } else {
      return 'danger';
    }
  }

}
