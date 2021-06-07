import {Component, Input, Output, EventEmitter} from "@angular/core";
import {HttpService} from "../http.service";
import {Pet} from "../pet";

@Component({
  selector: 'app-catalog-card',
  styleUrls: ['catalog-card.component.scss'],
  templateUrl: 'catalog-card.component.html',
  providers: [HttpService]
})
export class CatalogCardComponent {
  @Input() id: number = 0;
  @Input() name: string = '';
  @Input() status: string = '';

  constructor(private httpService : HttpService) {
  }

  deletePet(id: number) {
    this.httpService.deletePet(id).subscribe()
  }

  @Output() onClick = new EventEmitter<Pet>();

  changePet() {
    let pet: Pet = new Pet(this.id, {id: 0, name: ''}, this.name, [''], [{id: 0, name: ''}], this.status)
    this.onClick.emit(pet);
    console.log(pet)
  }

}
