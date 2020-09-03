import {Inject, Injectable, LOCALE_ID} from '@angular/core';
import {HttpClient, HttpParams, HttpResponseBase} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserProductList} from '../../model/user-product-list';
import {environment} from '../../../environments/environment';
import {NewUserProduct} from '../../model/new-user-product';
import {DatePipe, formatDate} from '@angular/common';
import {ModifyUserProduct} from '../../model/modify-user-product';
import {DeleteUserProduct} from '../../model/delete-user-product';

@Injectable({
  providedIn: 'root'
})
export class UserProductWebService {
  locale: any;
  constructor(private http: HttpClient, @Inject(LOCALE_ID) locale) {
    this.locale = locale;
  }

  loadUserProducts(date: Date): Observable<UserProductList> {
    let param = new HttpParams();
    param = param.set('date', formatDate(date, 'yyyy-MM-dd', this.locale));
    return this.http.get<UserProductList>(environment.appUrl + 'calories', {params: param});
  }
  addProduct(userProduct: NewUserProduct): Observable<HttpResponseBase> {

    return this.http.post(environment.appUrl + 'calories', userProduct, {observe: 'response'});
  }
  modifyUserProduct(userProduct: ModifyUserProduct): Observable<HttpResponseBase> {
    return this.http.put(environment.appUrl + 'calories', userProduct, {observe: 'response'});
  }
  deleteUserProduct(userProduct: DeleteUserProduct): Observable<HttpResponseBase> {
    return this.http.post(environment.appUrl + 'calories/remove', userProduct, {observe: 'response'});
  }

}
