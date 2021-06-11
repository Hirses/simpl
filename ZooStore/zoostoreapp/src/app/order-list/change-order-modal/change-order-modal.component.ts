import {Component, Input, Output, EventEmitter} from "@angular/core";
import {OrderService} from "../../order.service";
import {Order} from "../../order";

@Component({
  selector: 'app-change-order-modal',
  styleUrls: ['change-order-modal.component.scss'],
  templateUrl: 'change-order-modal.component.html'
})
export class ChangeOrderModalComponent {
  @Input() order: Order = new Order();
  @Input() changedOrder: Order = new Order();
  @Input() isModalOpen: boolean = false;

  @Output() onClose = new EventEmitter<null>();

  constructor(private orderService: OrderService) {
  }

  public closeModal(): void {
    this.onClose.emit();
  }

  public change(): void {
    this.orderService.changeOrder(this.order, this.changedOrder);
    this.onClose.emit();
  }

}
