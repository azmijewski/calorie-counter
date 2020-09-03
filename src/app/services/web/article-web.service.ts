import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Page} from '../../model/page';
import {ShortArticle} from '../../model/short-article';
import {environment} from '../../../environments/environment';
import {Article} from '../../model/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleWebService {

  constructor(private http: HttpClient) {}

  loadArticles(page: number, size: number): Observable<Page<ShortArticle>> {
    const param = new HttpParams().set('page', String(page)).set('size', String(size));
    return this.http.get<Page<ShortArticle>>(environment.appUrl + 'articles', {params: param});
  }
  loadArticleById(id: number): Observable<Article> {
    return this.http.get<Article>(environment.appUrl + 'articles/' + id, {});
  }
}
