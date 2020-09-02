import {Injectable} from '@angular/core';
import {HttpClient, HttpParams, HttpResponseBase} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../../model/product';
import {environment} from '../../../environments/environment';
import {Page} from '../../model/page';
import {Search} from '../../model/search';

@Injectable({
  providedIn: 'root'
})
export class ProductWebService {

  constructor(private http: HttpClient) {
  }

  getById(id: number): Observable<Product> {
    return this.http.get<Product>(environment.appUrl + 'products/' + id, {});
  }
  getProductList(page: number, size: number): Observable<Page<Product>> {
    let param = new HttpParams();
    param = param.set('page', String(page));
    param = param.set('size', String(size));
    return this.http.get<Page<Product>>(environment.appUrl + 'products', {params: param});
  }
  addProduct(product: Product): Observable<HttpResponseBase> {
    return this.http.post(environment.appUrl + 'products', product, {observe: 'response'});
  }
  modifyProduct(id: number, product: Product): Observable<HttpResponseBase> {
    return this.http.put(environment.appUrl + 'products/' + id, product, {observe: 'response'});
  }
  deleteProduct(id: number): Observable<HttpResponseBase> {
    return this.http.delete(environment.appUrl + 'products/' + id, {observe: 'response'});
  }
  searchProducts(page: number, size: number, search: string): Observable<Page<Product>> {
    let param = new HttpParams();
    param = param.set('page', String(page));
    param = param.set('size', String(size));
    const query: Search = {
      query: search
    };
    return this.http.post<Page<Product>>(environment.appUrl + 'products/search', query, {params: param});
  }


}
