import {Component} from "@angular/core";
import {HttpService} from "./http.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [HttpService]
})
export class AppComponent {
  num1: number = 0;
  num2: number = 0;
  sum: number | undefined;
  done: boolean = false;

  constructor(private httpService: HttpService) { }

  submit() {
    this.httpService.getSum(this.num1, this.num2).subscribe((data: any) => {
      this.sum = data.result;
      this.done = true;
    });
  }
}
