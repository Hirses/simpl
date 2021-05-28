import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {DataModule} from "./data/data.module";
import {AppComponent} from "./app.component";

@NgModule({
  imports: [BrowserModule, DataModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
