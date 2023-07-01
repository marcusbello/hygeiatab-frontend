import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { RegisterError, RegisterRequest, RegisterResponse } from 'src/app/models/register';
import { User } from 'src/app/models/user';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = environment.baseURL + '/users/';
  constructor( private httpClient: HttpClient, private authService: AuthService) { } 

  // userCreate handles the user creation service
  userCreate(req: RegisterRequest): Observable<RegisterResponse | RegisterError> {
    return this.httpClient.post<RegisterResponse | RegisterError>(this.apiUrl, req);
  }

  userInfo(): Observable<User> {
    console.log('get_user_info')
    return this.httpClient.get<User>(environment.baseURL + '/user')
  }

}
