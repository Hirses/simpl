import {NgModule} from "@angular/core";
import {HeaderComponent} from "./header.component";
import {NzMenuModule} from "ng-zorro-antd/menu";
import {RouterModule} from "@angular/router";
import {NzLayoutModule} from "ng-zorro-antd/layout";

@NgModule({
  imports: [NzMenuModule, RouterModule, NzLayoutModule],
  declarations: [HeaderComponent],
  exports: [HeaderComponent]
})
export class HeaderModule { }
