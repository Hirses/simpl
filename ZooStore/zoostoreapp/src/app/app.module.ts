import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {NZ_I18N} from 'ng-zorro-antd/i18n';
import {ru_RU} from 'ng-zorro-antd/i18n';
import {registerLocaleData} from '@angular/common';
import ru from '@angular/common/locales/ru';
import {RouterModule, Routes} from "@angular/router";
import {CatalogComponent} from "./catalog/catalog.component";
import {OrderListComponent} from "./order-list/order-list.component";
import {MainModule} from "./main/main.module";
import {MainComponent} from "./main/main.component";
import {BrowserModule} from "@angular/platform-browser";
import {CatalogModule} from "./catalog/catalog.module";
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {FooterModule} from "./footer/footer.module";
import {HeaderModule} from "./header/header.module";
import {OrderListModule} from "./order-list/order-list.module";
import {OrderService} from "./order.service";

registerLocaleData(ru);

const appRoutes: Routes = [
  {path: '', component: MainComponent},
  {path: 'catalog', component: CatalogComponent},
  {path: 'order-list', component: OrderListComponent},
]

@NgModule({
  imports: [BrowserModule, NzLayoutModule, RouterModule.forRoot(appRoutes), MainModule, CatalogModule, FooterModule, HeaderModule, OrderListModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [{provide: NZ_I18N, useValue: ru_RU}, OrderService]
})
export class AppModule { }
