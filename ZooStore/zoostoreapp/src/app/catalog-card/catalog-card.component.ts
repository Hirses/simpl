import {Component, Input, Output, EventEmitter} from "@angular/core";
import {Pet} from "../pet";

@Component({
  selector: 'app-catalog-card',
  styleUrls: ['catalog-card.component.scss'],
  templateUrl: 'catalog-card.component.html'
})
export class CatalogCardComponent {
  @Input() id: number = 0;
  @Input() name: string = '';
  @Input() status: string = '';

  @Output() onChange = new EventEmitter<Pet>();
  @Output() onDelete = new EventEmitter<number>();

  changePet() {
    let pet: Pet = new Pet(this.id, {id: 0, name: ''}, this.name, [''], [{id: 0, name: ''}], this.status)
    this.onChange.emit(pet);
  }

  deletePet() {
    this.onDelete.emit(this.id);
  }

}
