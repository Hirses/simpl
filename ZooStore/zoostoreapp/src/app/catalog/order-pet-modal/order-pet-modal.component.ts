import {Component, Input, Output, EventEmitter} from "@angular/core";
import {Order} from "../../order";
import {OrderService} from "../../order.service";


@Component({
  selector: 'app-order-pet-modal',
  styleUrls: ['order-pet-moda.componentl.scss'],
  templateUrl: 'order-pet-modal.component.html'
})
export class OrderPetModalComponent {
  @Input() orderingPet: Order = new Order();
  @Input() isModalOpen: boolean = false;

  @Output() onClose = new EventEmitter<null>()

  constructor(private orderService: OrderService) {
  }

  addOrder(order: Order): void {
    this.orderService.addOrder(order);
    this.onClose.emit();
  }

  closeModal(): void {
    this.onClose.emit()
  }
}
