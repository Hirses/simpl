import {Component, OnInit} from "@angular/core";
import {User} from "./user";
import {HttpService} from "./http.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [HttpService]
})
export class AppComponent implements OnInit {
  users: User[] = [];
  error: any;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.getUsers().subscribe(
      data => this.users = data,
      error => {
        this.error = error.message;
        console.log(error)
      }
    );
  }
}
