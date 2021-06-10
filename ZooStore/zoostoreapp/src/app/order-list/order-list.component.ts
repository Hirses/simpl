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

  constructor(private orderService: OrderService) {
  }

  getOrders() {
    this.orders = this.orderService.getOrders();
  }

  ngOnInit() {
    this.getOrders();
  }


}
