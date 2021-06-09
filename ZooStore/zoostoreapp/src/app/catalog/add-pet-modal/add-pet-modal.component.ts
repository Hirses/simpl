import {Component, Input, Output, EventEmitter} from "@angular/core";
import {Pet} from "../../pet";
import {PetService} from "../../pet.service";
import {take} from "rxjs/operators";

@Component({
  selector: 'app-add-pet-modal',
  styleUrls: ['add-pet-modal.component.scss'],
  templateUrl: 'add-pet-modal.component.html'
})
export class AddPetModalComponent {
  constructor(private httpService: PetService) {
  }

  public creatingPet: Pet = new Pet(0, {id: 0, name: ''}, '', [''], [{id: 0, name: ''}], '');

  @Input() isModalOpen: boolean = false;
  @Input() selectValues: Map<string, string> = new Map();

  @Output() post = new EventEmitter<null>();
  @Output() close = new EventEmitter<null>();

  public submit(pet: Pet): void {
    this.httpService.postPet(pet).pipe(take(1)).subscribe((data: any) => {
        this.creatingPet = data;
      },
      error => console.log(error),
      () => this.post.emit()
    )
  }

  closeModal(): void {
    this.close.emit()
  }
}
