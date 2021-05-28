import {Component} from "@angular/core";
import {DataService} from "./data.service";
import {LogService} from "./log.service";

@Component({
  selector: 'my-app',
  template: `<div class="panel">
                <div>
                  <input [(ngModel)]="name" placeholder="Модель"/>
                  <button (click)="addItem(name)">Добавить</button>
                </div>
                <table>
                  <tr *ngFor = 'let item of items'>
                    <td>{{item}}</td>
                  </tr>
                </table>
            </div>`,
  providers: [DataService, LogService]
})
export class AppComponent {
  items: string[] = [];
  name: string = '';

  constructor(private dataService: DataService) { }

  addItem(name: string) {
    this.dataService.addData(name);
  }
  ngOnInit() {
    this.items = this.dataService.getData();
  }
}
