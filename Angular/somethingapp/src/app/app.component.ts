import {Component, ElementRef, ViewChild} from "@angular/core";

@Component({
  selector: 'my-app',
  template: `<p #nameText>{{name}}</p>
  <p>{{nameText.textContent}}</p>
  <button (click)="change()">Изменить</button>`,
})
export class AppComponent {
  @ViewChild("nameText", {static: false})
  nameParagraph: ElementRef | undefined

  name: string = "Tom";

  change() {
    if (this.nameParagraph !== undefined) {
      console.log(this.nameParagraph.nativeElement.textContent);
      this.nameParagraph.nativeElement.textContent = 'hell';
    }
  }
}
