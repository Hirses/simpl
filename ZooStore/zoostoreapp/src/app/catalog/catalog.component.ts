import {Component, OnInit} from "@angular/core";
import {Pet} from "../pet";
import {HttpService,} from "../http.service";
import {NzModalService} from "ng-zorro-antd/modal";

@Component({
  selector: 'app-catalog',
  styleUrls: ['catalog.component.scss'],
  templateUrl: 'catalog.component.html',
  providers: [HttpService, NzModalService]
})
export class CatalogComponent implements OnInit{
  creatingPet: Pet = new Pet(0, {id: 0, name: ''}, '', [''], [{id: 0, name: ''}], '');
  changingPet: Pet = new Pet(0, {id: 0, name: ''}, '', [''], [{id: 0, name: ''}], '');
  removablePetId: number = 0;
  isAddModalOpen: boolean = false;
  isSearchModalOpen: boolean = false;
  isChangeModalOpen: boolean = false;
  donePostPet: boolean = false;
  foundPets: Pet[] = [];
  availablePets: Pet[] = [];
  pendingPets: Pet[] = [];
  soldPets: Pet[]  = [];
  searchInputValue: string = '';
  isFoundPets: boolean = false;

  constructor(private httpService: HttpService, private modal: NzModalService) {
  }

  showModal() {
    this.isAddModalOpen = true;
  }

  closeModal() {
    this.isAddModalOpen = false;
    this.isSearchModalOpen = false;
    this.isChangeModalOpen = false;
  }

  submit(pet: Pet) {
    this.httpService.postPet(pet).subscribe((data: any) => {
        this.creatingPet = data;
      },
      error => console.log(error),
      () => this.reloadCatalog()
    )
    this.closeModal()
  }

  searchPet(word: string) {
    this.isFoundPets = false;
    this.foundPets = [];

    if (word !== '') {

      try {
        let concatPets: Pet[] = this.foundPets = this.availablePets.concat(this.pendingPets).concat(this.soldPets);
        this.foundPets = concatPets.filter(pet => (typeof pet.name === 'string') && (pet.name.toUpperCase().indexOf(word.toUpperCase()) > -1));
      } catch (err) {
        console.log(`something wrong...( ${err} )`);
      }

    }

    if (this.foundPets.length === 0 || word === '') {
      this.isFoundPets = true;
    }

    this.isSearchModalOpen = true;
  }

  reloadCatalog() {
    this.httpService.getPetByStatus('available').subscribe(
      (data: any) => this.availablePets = data,
      error => console.log(error),
      () => this.availablePets = this.availablePets.filter(pet => pet.id < 9.0071993e+15)
    );
    this.httpService.getPetByStatus('pending').subscribe(
      (data: any) => this.pendingPets = data,
      error => console.log(error),
      () => this.availablePets = this.availablePets.filter(pet => pet.id < 9.0071993e+15)
    );
    this.httpService.getPetByStatus('sold').subscribe(
      (data: any) => this.soldPets = data,
      error => console.log(error),
      () => this.availablePets = this.availablePets.filter(pet => pet.id < 9.0071993e+15)
    );
  }

  ngOnInit() {
    this.reloadCatalog()
  }

  openChangeModal(pet: Pet) {
    this.changingPet.id = pet.id;
    this.changingPet.name = pet.name;
    this.changingPet.status = pet.status;
    this.isChangeModalOpen = true;
  }

  openDeleteModal(id: number) {
    this.modal.confirm({
      nzTitle: 'Вы действительно хотите удалить животное?',
      nzOkText: 'Да',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () => this.deletePet(id),
      nzCancelText: 'Нет'
    });
  }

  deletePet(id: number) {
    this.httpService.deletePet(id).subscribe(() => this.reloadCatalog(),(error) => console.log(error))
  }

}
