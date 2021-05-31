import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) { }

  getSum(num1: number, num2: number) {
    return this.http.get(`http://localhost:3000/sum?num1=${num1}&num2=${num2}`)
  }
}
