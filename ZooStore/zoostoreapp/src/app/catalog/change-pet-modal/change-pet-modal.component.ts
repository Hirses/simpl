import {Component, Input, Output, EventEmitter} from "@angular/core";
import {HttpService} from "../../http.service";
import {Pet} from "../../pet";
import {take} from "rxjs/operators";

@Component({
  selector: 'app-change-pet-modal',
  styleUrls: ['change-pet-modal.component.scss'],
  templateUrl: 'change-pet-modal.component.html'
})
export class ChangePetModalComponent {
  constructor(private httpService: HttpService) {
  }

  @Input() changingPet: Pet = new Pet(0, {id: 0, name: ''}, '', [''], [{id: 0, name: ''}], '');
  @Input() isModalOpen: boolean = false;

  @Output() post = new EventEmitter<null>();
  @Output() close = new EventEmitter<null>();

  public changePet(pet: Pet): void {
    this.httpService.changePet(pet).pipe(take(1)).subscribe(
      () => this.post.emit(),
      (error) => console.log(error)
    );
  }

  public closeModal(): void {
    this.close.emit();
  }
}
