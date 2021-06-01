import {Component} from "@angular/core";
import {ComponentCanDeactivate} from "./exit.about.guard";
import {Observable} from "rxjs";

@Component({
  selector: 'my-app',
  template: `<div>
                <h1>Маршрутизайция в Angular</h1>
                <nav>
                  <a routerLink="">Главная</a>
                  <a routerLink="/about">О сайте</a>
                </nav>
                <router-outlet></router-outlet>
            </div>`
})
export class AppComponent { }
