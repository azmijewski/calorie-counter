import {Injectable} from '@angular/core';
import {HttpClient, HttpResponseBase} from '@angular/common/http';
import {User} from '../../model/user';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {DeleteAccount} from '../../model/delete-account';
import {ChangePassword} from '../../model/change-password';

@Injectable({
  providedIn: 'root'
})
export class UserServiceWeb {

  constructor(private http: HttpClient) {
  }


  loadUserData(): Observable<User> {
    return this.http.get<User>(environment.appUrl + 'current-user', {});
  }

  deleteAccount(deleteAccount: DeleteAccount): Observable<HttpResponseBase> {
    return this.http.post(environment.appUrl + 'current-user', deleteAccount, {observe: 'response'});
  }
  modifyUserData(user: User): Observable<HttpResponseBase> {
    return this.http.put(environment.appUrl + 'current-user', user, {observe: 'response'});
  }
  changeUserPassword(changePass: ChangePassword): Observable<HttpResponseBase> {
    return this.http.put(environment.appUrl + 'change-password', changePass, {observe: 'response'});
  }
}
