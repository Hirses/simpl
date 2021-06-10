import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzGridModule} from "ng-zorro-antd/grid";
import {NzModalModule} from "ng-zorro-antd/modal";
import {NzSelectModule} from "ng-zorro-antd/select";
import {NzTabsModule} from "ng-zorro-antd/tabs";
import {RouterModule} from "@angular/router";
import {CatalogComponent} from "./catalog.component";
import {CatalogCardComponent} from "./catalog-card/catalog-card.component";
import {CatalogListComponent} from "./catalog-list/catalog-list.component";
import {NZ_I18N, ru_RU} from "ng-zorro-antd/i18n";
import {NzButtonModule} from "ng-zorro-antd/button";
import {PetService} from "../pet.service";
import {AddPetModalComponent} from "./add-pet-modal/add-pet-modal.component";
import {ChangePetModalComponent} from "./change-pet-modal/change-pet-modal.component";
import {OrderPetModalComponent} from "./order-pet-modal/order-pet-modal.component";
import {NzDatePickerModule} from "ng-zorro-antd/date-picker";

@NgModule({
    imports: [FormsModule, HttpClientModule, BrowserAnimationsModule, NzInputModule, NzIconModule, NzGridModule, NzModalModule, NzSelectModule, NzTabsModule, NzButtonModule, RouterModule, NzDatePickerModule],
  declarations: [CatalogComponent, CatalogCardComponent,  CatalogListComponent, AddPetModalComponent, ChangePetModalComponent, OrderPetModalComponent],
  bootstrap: [CatalogComponent],
  providers: [{provide: NZ_I18N, useValue: ru_RU}, PetService]
})
export class CatalogModule { }
