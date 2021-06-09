import {Component, Input, Output, EventEmitter} from "@angular/core";
import {Pet} from "../../pet";

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
  @Output() onOrder = new EventEmitter<Pet>();

  public changePet(event : Pet): void {
      let pet: Pet = event;
    this.onChange.emit(pet);
  }

  public deletePet(event : number): void {
    this.onDelete.emit(event)
  }

  public getPets(pets : Pet[]): Pet[] {
    return pets.filter(pet => (typeof pet.name === "string")  && (pet.name.toUpperCase().includes(this.searchInputValue.toUpperCase())))
  }

  public orderPet(event: Pet): void {
    this.onOrder.emit(event);
  }
}
