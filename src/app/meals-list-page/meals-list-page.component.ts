import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Meal} from '../model/meal';
import {MatPaginator} from '@angular/material/paginator';
import {MealWebService} from '../services/web/meal-web.service';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {AddMealDialogComponent} from '../dialogs/add-meal-dialog/add-meal-dialog.component';
import {ResultDialogComponent} from '../dialogs/result-dialog/result-dialog.component';
import {EditMealDialogComponent} from '../dialogs/edit-meal-dialog/edit-meal-dialog.component';

@Component({
  selector: 'app-meals-list-page',
  templateUrl: './meals-list-page.component.html',
  styleUrls: ['./meals-list-page.component.css']
})
export class MealsListPageComponent implements OnInit, AfterViewInit {

  meals = new Array<Meal>();
  total = 0;
  page = 0;
  size = 10;
  hasNext = false;
  hasPrevious = false;

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  constructor(private mealWebService: MealWebService, private router: Router, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadData(0, this.size);
  }

  ngAfterViewInit(): void {
    this.paginator.pageIndex = 0;
    this.paginator.pageSize = 10;
  }

  addMeals(): void {
    const dialog = this.dialog.open(AddMealDialogComponent, {
      width: '700px'
    });
    dialog.afterClosed().subscribe(data => {
      if (data) {
        this.mealWebService.saveMeal(data).subscribe(response => {
         this.loadData(this.paginator.pageIndex, this.paginator.pageSize);
        });
      }
    }, error => {
      const resultDialog = this.dialog.open(ResultDialogComponent, {
        width: '700px',
        data: 'Nie udało się stworzyć posiłku'
      });
    });
  }
  loadData(page: number, size: number): void {
    this.mealWebService.loadMeals(page, size).subscribe(data => {
      this.meals = data.content;
      this.hasNext = !data.last;
      this.hasPrevious = !data.first;
      this.total = data.totalElements;
    });
  }

  delete(meal: Meal): void {
    this.mealWebService.deleteMeal(meal.id).subscribe(response => {
      this.loadData(this.paginator.pageIndex, this.paginator.pageSize);
    }, error => {
      const resultDialog = this.dialog.open(ResultDialogComponent, {
        width: '700px',
        data: 'Nie udało się usunąć posiłku'
      });
    });
  }

  edit(meal: Meal): void {
    const dialog = this.dialog.open(EditMealDialogComponent, {
      width: '700px',
      data: meal.name
    });
    dialog.afterClosed().subscribe(data => {
      if (data) {
        meal.name = data;
        this.mealWebService.editMeal(meal, meal.id).subscribe(response => {
          this.loadData(this.paginator.pageIndex, this.paginator.pageSize);
        }, error => {
          const resultDialog = this.dialog.open(ResultDialogComponent, {
            width: '700px',
            data: 'Nie udało się zmienic nazwy posiłku'
          });
        });
      }
    });
  }

  show(meal: Meal): void {
    this.router.navigate(['meals', meal.id]);
  }
}
