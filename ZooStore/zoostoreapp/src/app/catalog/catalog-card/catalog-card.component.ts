import {Component, Input, Output, EventEmitter} from "@angular/core";
import {Pet} from "../../pet";
import {Order} from "../../order";
import {OrderService} from "../../order.service";

@Component({
  selector: 'app-catalog-card',
  styleUrls: ['catalog-card.component.scss'],
  templateUrl: 'catalog-card.component.html'
})
export class CatalogCardComponent {

  constructor(private orderService: OrderService) {
  }

  @Input() id: number = 0;
  @Input() name: string = '';
  @Input() status: string = '';
  @Input() isNotSold: boolean = true;

  @Output() onChange = new EventEmitter<Pet>();
  @Output() onDelete = new EventEmitter<number>();
  @Output() onOrder = new EventEmitter<Order>();

  public changePet(): void {
    let pet: Pet = new Pet(this.id, {id: 0, name: ''}, this.name, [''], [{id: 0, name: ''}], this.status)
    this.onChange.emit(pet);
  }

  public deletePet(): void {
    this.onDelete.emit(this.id);
  }

  public orderPet(): void {
    let orderingPet: Order = new Order(this.orderService.getId(), this.name, 1, new Date(), 'placed', true);
    this.onOrder.emit(orderingPet);
  }


}
