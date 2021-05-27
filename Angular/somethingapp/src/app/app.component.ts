import {Component} from "@angular/core";

@Component({
  selector: 'my-app',
  template: `<child-component></child-component>
            <p>Привет {{name}}</p>`,
  styles: [`h2, p {color:#333}`]
})
export class AppComponent {
  name = 'Петр'
}
