import {Component, Input, Output, EventEmitter} from "@angular/core";
import {Order} from "../../order";
import {OrderService} from "../../order.service";

@Component({
  selector: 'app-order-card',
  styleUrls: ['order-card.component.scss'],
  templateUrl: 'order-card.component.html'
})
export class OrderCardComponent {
  constructor(private orderService: OrderService) {
  }

  @Input() order: Order = new Order();

  @Output() onEvent = new EventEmitter<null>();

  public delete(): void {
    this.orderService.deleteOrder(this.order);
    this.onEvent.emit();
  }
}
