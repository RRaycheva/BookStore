import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../shared/user';

@Injectable({
  providedIn: 'root'
})
export class UserResource {

  constructor(private http: HttpClient) { }

  createUsers(user: User): Observable<void> {
    return this.http.post<void>('api/User', user);
  };

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>('api/User');
  };

  deleteAllUsers(): Observable<void> {
    return this.http.delete<void>('api/User')
  };


}


