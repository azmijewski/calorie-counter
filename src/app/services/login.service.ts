import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private router: Router) {
  }

  isLogged(): boolean {
    return sessionStorage.getItem('token') != null;
  }

  login(username: string, password: string): void {
    const token = btoa(username.concat(':').concat(password));
    sessionStorage.setItem('token', token);
    this.router.navigate(['calories']);
  }
  logout(): void {
    sessionStorage.removeItem('token');
  }
}
