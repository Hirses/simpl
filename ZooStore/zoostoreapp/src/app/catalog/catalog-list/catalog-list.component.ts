import {Component, Input, Output, EventEmitter} from "@angular/core";
import {Pet} from "../../pet";
import {Order} from "../../order";

@Component({
  selector: 'app-catalog-list',
  templateUrl: 'catalog-list-component.html'
})
export class CatalogListComponent {
  @Input() pets : Pet[] = [];
  @Input() searchInputValue : string = '';
  @Input() isNotSold: boolean = true;

  @Output() onChange = new EventEmitter<Pet>();
  @Output() onDelete = new EventEmitter<number>();
  @Output() onOrder = new EventEmitter<Order>();

  public changePet(event : Pet): void {
    this.onChange.emit(event);
  }

  public deletePet(event : number): void {
    this.onDelete.emit(event)
  }

  public getPets(pets : Pet[]): Pet[] {
    return pets.filter(pet => (typeof pet.name === "string")  && (pet.name.toUpperCase().includes(this.searchInputValue.toUpperCase())))
  }

  public orderPet(event: Order): void {
    this.onOrder.emit(event);
  }
}
