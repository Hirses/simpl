import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home.component";
import {AboutComponent} from "./about.component";
import {NotFoundComponent} from "./not-found.component";
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {ItemComponent} from "./item.component";
import {FormsModule} from "@angular/forms";
import {ItemDetailsComponent} from "./item.details.component";
import {ItemStatComponent} from "./item.stat.component";

const itemRoutes : Routes = [
  {path: 'details', component: ItemDetailsComponent},
  {path: 'stat', component: ItemStatComponent}
]

const appRoutes : Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'item/:id', component: ItemComponent, children: itemRoutes},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(appRoutes), FormsModule],
  declarations: [AppComponent, HomeComponent, AboutComponent, NotFoundComponent, ItemComponent, ItemStatComponent, ItemDetailsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
