import {Component} from "@angular/core";

@Component({
  selector: 'child-component',
  template: `<h2>Добро пожаловать {{name}}!</h2>`,
  styles: [`h2, p {color: red;}`]
})
export class  ChildComponent {
  name = 'Евгений'
}
