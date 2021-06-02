import {Component} from "@angular/core";
import {Pet} from "../pet";

@Component({
  selector: 'app-catalog',
  styleUrls: ['catalog.component.scss'],
  templateUrl: 'catalog.component.html'
})
export class CatalogComponent {
  creatingPet : Pet = new Pet(0, {id: 0, name:''}, '', [''], [{id :0, name: ''}], '')

  public isModalOpen : boolean = false;

  showModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
