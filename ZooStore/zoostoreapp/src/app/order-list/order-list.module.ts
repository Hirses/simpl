import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {OrderListComponent} from "./order-list.component";
import {NzCardModule} from "ng-zorro-antd/card";
import {NzButtonModule} from "ng-zorro-antd/button";
import {OrderCardComponent} from "./order-card/order-card.component";
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [RouterModule, NzCardModule, NzButtonModule, NzLayoutModule, CommonModule],
  declarations: [OrderListComponent, OrderCardComponent],
  bootstrap: [OrderListComponent]
})
export class OrderListModule { }
