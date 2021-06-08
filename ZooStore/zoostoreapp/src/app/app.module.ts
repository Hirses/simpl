import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {NZ_I18N} from 'ng-zorro-antd/i18n';
import {ru_RU} from 'ng-zorro-antd/i18n';
import {registerLocaleData} from '@angular/common';
import ru from '@angular/common/locales/ru';
import {HeaderComponent} from "./header/header.component";
import {RouterModule, Routes} from "@angular/router";
import {NzButtonModule} from "ng-zorro-antd/button";
import {CatalogComponent} from "./catalog/catalog.component";
import {OrderListComponent} from "./order-list/order-list.component";
import {FooterComponent} from "./footer/footer.component";
import {MainModule} from "./main/main.module";
import {MainComponent} from "./main/main.component";
import {BrowserModule} from "@angular/platform-browser";
import {CatalogModule} from "./catalog/catalog.module";
import {NzMenuModule} from "ng-zorro-antd/menu";
import {NzLayoutModule} from "ng-zorro-antd/layout";

registerLocaleData(ru);

const appRoutes: Routes = [
  {path: '', component: MainComponent},
  {path: 'catalog', component: CatalogComponent},
  {path: 'order-list', component: OrderListComponent},
]

@NgModule({
  imports: [BrowserModule, NzMenuModule, NzLayoutModule, RouterModule.forRoot(appRoutes), MainModule, CatalogModule],
  declarations: [AppComponent, HeaderComponent, FooterComponent],
  bootstrap: [AppComponent],
  providers: [{provide: NZ_I18N, useValue: ru_RU}]
})
export class AppModule { }
