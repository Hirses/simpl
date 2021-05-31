import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {User} from "./user";
import {map, catchError} from "rxjs/operators";

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) { }

  getUsers() : Observable<User[]>{
    return this.http.get('assets/users.json').pipe(map((data: any) => {
      let userList = data['userList'];
      return userList.map(function(user: any): User {
        return new User(user.userName, user.userAge);
      });
    }))

    catchError(err => {
      console.log(err);
      return throwError(err)
    })
  }
}
