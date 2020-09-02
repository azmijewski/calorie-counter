import {Injectable} from '@angular/core';
import {HttpClient, HttpResponseBase} from '@angular/common/http';
import {Router} from '@angular/router';
import {Login} from '../model/login';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {User} from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private router: Router) {
  }

  isLogged(): boolean {
    return sessionStorage.getItem('token') != null;
  }
  login(username: string, pass: string): Observable<HttpResponseBase> {
    const login: Login = {
      login: username,
      password: pass
    };
    return this.http.post(environment.appUrl + 'login', login, {observe: 'response'});
  }
  logout(): void {
    sessionStorage.removeItem('token');
    this.router.navigate(['']);
  }
  register(user: User): Observable<HttpResponseBase> {
    return this.http.post(environment.appUrl + 'registration', user, {observe: 'response'});
  }
  confirmAccount(token: string): Observable<HttpResponseBase> {
    return this.http.put(environment.appUrl + 'registration/' + token, null, {observe: 'response'});
  }
}
