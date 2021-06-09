import {NgModule} from "@angular/core";
import {FooterComponent} from "./footer.component";
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NZ_I18N, ru_RU} from "ng-zorro-antd/i18n";
import {NzMenuModule} from "ng-zorro-antd/menu";

@NgModule({
  imports: [NzLayoutModule, NzMenuModule],
  declarations: [FooterComponent],
  bootstrap: [FooterComponent],
  exports: [
    FooterComponent
  ],
  providers: [{provide: NZ_I18N, useValue: ru_RU}]
})
export class FooterModule { }
