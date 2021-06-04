import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {AppComponent} from "./app.component";
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { ru_RU } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import ru from '@angular/common/locales/ru';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzMenuModule} from "ng-zorro-antd/menu";
import {HeaderComponent} from "./header/header.component";
import {RouterModule, Routes} from "@angular/router";
import {MainComponent} from "./main/main.component";
import {NzButtonModule} from "ng-zorro-antd/button";
import {CatalogComponent} from "./catalog/catalog.component";
import {OrderListComponent} from "./order-list/order-list.component";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzIconModule} from "ng-zorro-antd/icon";
import {FooterComponent} from "./footer/footer.component";
import {NzGridModule} from "ng-zorro-antd/grid";
import {NzModalModule} from "ng-zorro-antd/modal";
import {NzSelectModule} from "ng-zorro-antd/select";
import {NzTabsModule} from "ng-zorro-antd/tabs";

registerLocaleData(ru);

const appRoutes : Routes = [
  {path: '', component: MainComponent},
  {path: 'catalog', component: CatalogComponent},
  {path: 'order-list', component: OrderListComponent},
]

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, BrowserAnimationsModule, NzLayoutModule, NzMenuModule, NzButtonModule, NzInputModule, NzIconModule, NzGridModule, NzModalModule, NzSelectModule, NzTabsModule, RouterModule.forRoot(appRoutes)],
  declarations: [AppComponent,HeaderComponent, MainComponent, CatalogComponent, FooterComponent],
  bootstrap: [AppComponent],
  providers: [{ provide: NZ_I18N, useValue: ru_RU }]
})
export class AppModule { }
