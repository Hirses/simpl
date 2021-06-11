import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {OrderListComponent} from "./order-list.component";
import {NzCardModule} from "ng-zorro-antd/card";
import {NzButtonModule} from "ng-zorro-antd/button";
import {OrderCardComponent} from "./order-card/order-card.component";
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {CommonModule} from "@angular/common";
import {ChangeOrderModalComponent} from "./change-order-modal/change-order-modal.component";
import {NzModalModule} from "ng-zorro-antd/modal";
import {NzFormModule} from "ng-zorro-antd/form";
import {FormsModule} from "@angular/forms";
import {NzDatePickerModule} from "ng-zorro-antd/date-picker";
import {NzGridModule} from "ng-zorro-antd/grid";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzIconModule} from "ng-zorro-antd/icon";

@NgModule({
  imports: [RouterModule, NzCardModule, NzButtonModule, NzLayoutModule, NzModalModule, NzFormModule, FormsModule, NzDatePickerModule, CommonModule, NzGridModule, NzInputModule, NzIconModule],
  declarations: [OrderListComponent, OrderCardComponent, ChangeOrderModalComponent],
  bootstrap: [OrderListComponent]
})
export class OrderListModule { }
