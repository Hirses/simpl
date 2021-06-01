import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {FormatPipe} from "./format.pipe";
import {JoinPipe} from "./join.pipe";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, FormatPipe, JoinPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
