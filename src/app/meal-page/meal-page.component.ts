import {Component, OnInit} from '@angular/core';
import {Meal} from '../model/meal';
import {Product} from '../model/product';
import {UserProduct} from '../model/user-product';
import {MealWebService} from '../services/web/meal-web.service';
import {ActivatedRoute} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {AddCalorieProductDialogComponent} from '../dialogs/add-calorie-product-dialog/add-calorie-product-dialog.component';
import {NewProductMeal} from '../model/new-product-meal';
import {ResultDialogComponent} from '../dialogs/result-dialog/result-dialog.component';
import {DeleteMealProduct} from '../model/delete-meal-product';
import {ModifyUserProductComponent} from '../dialogs/modify-user-product/modify-user-product.component';
import {ModifyMealProduct} from '../model/modify-meal-product';

@Component({
  selector: 'app-meal-page',
  templateUrl: './meal-page.component.html',
  styleUrls: ['./meal-page.component.css']
})
export class MealPageComponent implements OnInit {
  meal: Meal;
  products = new Array<UserProduct>();
  isDataLoaded = false;

  constructor(private mealWebService: MealWebService,
              private route: ActivatedRoute,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.isDataLoaded = false;
    this.route.params.subscribe(param => {
      this.mealWebService.loadMealById(param.id).subscribe(data => {
        this.meal = data.mealDto;
        this.products = data.products;
        this.isDataLoaded = true;
      }, error => {
        this.isDataLoaded = true;
      });
    });
  }

  addProduct(): void {
    const dialog = this.dialog.open(AddCalorieProductDialogComponent, {
      width: '700px'
    });
    dialog.afterClosed().subscribe(data => {
      const mealProduct: NewProductMeal = {
        productId: data.productId,
        mealId: this.meal.id,
        weight: data.weight,
      };
      this.mealWebService.addProductToMeal(mealProduct).subscribe(response => {
        this.ngOnInit();
      }, error => {
        const resultDialog = this.dialog.open(ResultDialogComponent, {
          width: '700px',
          data: 'Nie udało się dodać produktu do posiłku'
        });
      });
    });
  }

  delete(product: UserProduct): void {
    const mealProduct: DeleteMealProduct = {
      productId: product.productId,
      mealId: this.meal.id
    };
    this.mealWebService.deleteProductFromMeal(mealProduct).subscribe(response => {
      this.ngOnInit();
    }, error => {
      const resultDialog = this.dialog.open(ResultDialogComponent, {
        width: '700px',
        data: 'Nie udało się usunąc produktu z posiłku'
      });
    });
  }

  edit(product: UserProduct): void {
    const dialog = this.dialog.open(ModifyUserProductComponent, {
      width: '700px',
      data: product.weight,
    });
    dialog.afterClosed().subscribe(data => {
      if (data) {
        const modifyMealProduct: ModifyMealProduct = {
          productId: product.productId,
          mealId: this.meal.id,
          weight: data,
        };
        this.mealWebService.modifyProductInMeal(modifyMealProduct).subscribe(response => {
          this.ngOnInit();
        }, error => {
          const resultDialog = this.dialog.open(ResultDialogComponent, {
            width: '700px',
            data: 'Nie udało się zmienić wagi produktu'
          });
        });
      }
    });
  }
}
