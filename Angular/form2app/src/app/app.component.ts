import {Component} from "@angular/core";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html'
})
export class AppComponent {
  name: string = '';
  email : string = '';
  phone : string = '';

  onSubmit(form: NgForm) {
    console.log(form);
  }
}
