import {Injectable} from '@angular/core';
import {HttpClient, HttpParams, HttpResponseBase} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Page} from '../../model/page';
import {Product} from '../../model/product';
import {Meal} from '../../model/meal';
import {Observable} from 'rxjs';
import {MealWithProducts} from '../../model/meal-with-products';
import {AddProductDialogComponent} from '../../dialogs/add-product-dialog/add-product-dialog.component';
import {NewProductMeal} from '../../model/new-product-meal';
import {DeleteMealProduct} from '../../model/delete-meal-product';
import {ModifyMealProduct} from '../../model/modify-meal-product';

@Injectable({
  providedIn: 'root'
})
export class MealWebService {

  appUrl = environment.appUrl + 'meals';

  constructor(private http: HttpClient) {
  }

  loadMeals(page: number, size: number): Observable<Page<Meal>> {
    let param = new HttpParams();
    param = param.set('page', String(page));
    param = param.set('size', String(size));
    return this.http.get<Page<Meal>>(this.appUrl, {params: param});
  }
  loadMealById(id: number): Observable<MealWithProducts> {
    return this.http.get<MealWithProducts>(this.appUrl + '/' + id, {});
  }
  saveMeal(meal: Meal): Observable<HttpResponseBase> {
    return this.http.post(this.appUrl, meal, {observe: 'response'});
  }
  editMeal(meal: Meal, id: number): Observable<HttpResponseBase> {
    return this.http.put(this.appUrl + '/' + id, meal, {observe: 'response'});
  }
  deleteMeal(id: number): Observable<HttpResponseBase> {
    return this.http.delete(this.appUrl + '/' + id,  {observe: 'response'});
  }
  addProductToMeal(productToMeal: NewProductMeal): Observable<HttpResponseBase> {
    return this.http.post(this.appUrl + '/addProduct', productToMeal, {observe: 'response'});
  }
  deleteProductFromMeal(productFromMeal: DeleteMealProduct): Observable<HttpResponseBase> {
    return this.http.post(this.appUrl + '/deleteProduct', productFromMeal, {observe: 'response'});
  }
  modifyProductInMeal(productInMeal: ModifyMealProduct): Observable<HttpResponseBase> {
    return this.http.put(this.appUrl + '/modifyProduct', productInMeal, {observe: 'response'});
  }

}
