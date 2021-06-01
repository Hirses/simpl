import {Component} from "@angular/core";
import {Router} from "@angular/router";

export  class Item {
  constructor(public id : number, public product : string, public price : number) { }
}

@Component({
  selector: 'my-app',
  styles: [`
    .active {color: red}
  `],
  template: `<div>
                <ul>
                  <li routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">
                    <a routerLink="">Главная</a>
                  </li>
                  <li routerLinkActive="active">
                    <a routerLink="/about">О сайт</a>
                  </li>
                  <li routerLinkActive="active">
                    <a [routerLink]="['item','5']" [queryParams]="{'product': 'phone', 'price': 200}">item 5</a>
                  </li>
                  <li routerLinkActive="active">
                    <a [routerLink]="['item','8']" [queryParams]="{'product': 'tablet'}">item 8</a>
                  </li>
                  <li routerLinkActive="active">
                    <a routerLink="/item/5/details">Информация о товаре</a> |
                    <a routerLink="/item/5/stat">Статистика товара</a>
                  </li>
                </ul>
                <router-outlet></router-outlet>
                <div class="form-group">
                  <h3>Параметры объекта</h3>
                  <input type="number" [(ngModel)]="item.id" class="form-control" placeholder="Номер модели"><br/>
                  <input type="number" [(ngModel)]="item.price" class="form-control" placeholder="Цена"/><br/>
                  <input [(ngModel)]="item.product" class="form-control" placeholder="Товар"/><br/>
                  <button (click)="goToItem(item)" class="btn">Перейти</button>
                </div>
            </div>`
})
export class AppComponent {
  item : Item = new Item(1, '', 0);

  constructor(private router: Router) { }

  goToItem(myItem : Item) {
    this.router.navigate(
      ['/item', myItem.id],
      {
        queryParams: {
          'product': myItem.product,
          'price': myItem.price
        }
      }
    );
  }
}
