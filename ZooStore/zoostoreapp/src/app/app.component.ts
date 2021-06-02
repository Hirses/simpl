import {Component} from "@angular/core";
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  providers: [HeaderComponent, FooterComponent]
})
export class AppComponent { }
