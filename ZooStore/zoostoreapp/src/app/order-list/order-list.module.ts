import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {OrderListComponent} from "./order-list.component";
import {NzCardModule} from "ng-zorro-antd/card";
import {NzButtonModule} from "ng-zorro-antd/button";

@NgModule({
  imports:[RouterModule, NzCardModule, NzButtonModule],
  declarations: [OrderListComponent],
  bootstrap: [OrderListComponent]
})
export class OrderListModule { }
