import {Component, OnInit} from '@angular/core';
import {ProductWithWeight} from '../../model/product-with-weight';
import {FormGroup} from '@angular/forms';
import {Meal} from '../../model/meal';
import {MealWebService} from '../../services/web/meal-web.service';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-add-meal-to-user-products-dialog',
  templateUrl: './add-meal-to-user-products-dialog.component.html',
  styleUrls: ['./add-meal-to-user-products-dialog.component.css']
})
export class AddMealToUserProductsDialogComponent implements OnInit {

  meals = new Array<Meal>();
  form: FormGroup;
  first = true;
  last = true;
  page = 0;
  size = 5;

  constructor(private mealWebService: MealWebService,
              public dialogRef: MatDialogRef<AddMealToUserProductsDialogComponent>) {
  }

  ngOnInit(): void {
    this.loadData();
  }

  addMeal(meal: Meal): void {
    this.dialogRef.close(meal.id);
  }

  previousPage(): void {
    this.page--;
    this.loadData();
  }

  nextPage(): void {
    this.page++;
    this.loadData();
  }

  loadData(): void {
    this.mealWebService.loadMeals(this.page, this.size).subscribe(data => {
      this.meals = data.content;
      this.last = data.last;
      this.first = data.first;
    });
  }
}
