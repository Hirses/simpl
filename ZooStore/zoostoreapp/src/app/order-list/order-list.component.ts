import {Component, OnInit} from "@angular/core";
import {OrderService} from "../order.service";
import {Order} from "../order";

@Component({
  selector: 'app-order-list',
  styleUrls: ['order-list.component.scss'],
  templateUrl: 'order-list.component.html'
})
export class OrderListComponent implements OnInit{
  public orders: Order[] = [];
  public changingOrder: Order = new Order();
  public isChangeModalOpen: boolean = false;
  public searchInputValue: string = '';

  constructor(private orderService: OrderService) {
  }

  public getOrders() {
    this.isChangeModalOpen = false;
    this.orders = this.orderService.getOrders();
  }

  ngOnInit() {
    this.getOrders();
  }

  public changeOrder(event: Order): void {
    this.changingOrder = new Order(event.id, event.petName, event.quantity, event.shipDate, event.status, event.complete);
    this.isChangeModalOpen = true;
  }

  public searchOrders(): Order[] {
    return this.orders.filter(order => order.id.toString().includes(this.searchInputValue));
  }

}
