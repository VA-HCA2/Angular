import { Injectable } from '@angular/core';
import { User} from '../user/user.model';
import { Observable, Subject, of} from 'rxjs';
import { map } from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable()
  
export class UserService {
  users: User [] =[];

  private usersEndpoint: string = 'http://localhost:3000/users/';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private http: HttpClient) { }

    getUsers(): Observable<any> {
      return this.http.get(this.usersEndpoint, this.httpOptions)
      .pipe(map(res => <any[]>res));
  }

  addUser(firstName: string, lastName: string, email: string): Array<any> {
    this.users.push(new User(firstName, lastName, email))
    return this.users;
  }
}

 



