import {Component} from "@angular/core";

@Component({
  selector: 'my-app',
  template: `<p *while="condition">
    Первый параграф
  </p>
  <p *while="!condition">
    Второй параграф
  </p>
  <button (click)="toggle()">Toggle</button>`
})
export class AppComponent {
  condition: boolean = true;

  toggle() {
    this.condition = !this.condition;
  }
}
