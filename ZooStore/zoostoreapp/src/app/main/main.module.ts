import {NgModule} from "@angular/core";
import {MainComponent} from "./main.component";
import {NZ_I18N, ru_RU} from "ng-zorro-antd/i18n";
import {NzButtonModule} from "ng-zorro-antd/button";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [RouterModule, NzButtonModule],
  declarations: [MainComponent],
  bootstrap: [MainComponent],
  providers: [{provide: NZ_I18N, useValue: ru_RU}]
})
export class MainModule { }
