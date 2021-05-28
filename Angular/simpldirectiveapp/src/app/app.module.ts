import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {WhileDirective} from "./while.directive";

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, WhileDirective],
  bootstrap: [AppComponent]
})
export class AppModule { }
