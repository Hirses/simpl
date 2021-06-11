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

  @Output() onDelete = new EventEmitter<null>();
  @Output() onChange = new EventEmitter<Order>();

  public delete(): void {
    this.orderService.deleteOrder(this.order);
    this.onDelete.emit();
  }

  public change(): void {
    this.onChange.emit(this.order)
  }
}
