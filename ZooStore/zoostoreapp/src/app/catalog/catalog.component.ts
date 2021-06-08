import {Component, OnInit} from "@angular/core";
import {Pet} from "../pet";
import {PetService} from "../pet.service";
import {NzModalService} from "ng-zorro-antd/modal";
import {take} from "rxjs/operators";

@Component({
  selector: 'app-catalog',
  styleUrls: ['catalog.component.scss'],
  templateUrl: 'catalog.component.html',
  providers: [PetService, NzModalService]
})
export class CatalogComponent implements OnInit{
  public changingPet: Pet = new Pet(0, {id: 0, name: ''}, '', [''], [{id: 0, name: ''}], '');
  public removablePetId: number = 0;
  public isAddModalOpen: boolean = false;
  public isSearchModalOpen: boolean = false;
  public isChangeModalOpen: boolean = false;
  public availablePets: Pet[] = [];
  public pendingPets: Pet[] = [];
  public soldPets: Pet[]  = [];
  public searchInputValue: string = '';

  constructor(private httpService: PetService, private modal: NzModalService) {
  }

  public showModal(): void {
    this.isAddModalOpen = true;
  }

  closeAfterDoneModal(): void {
    this.reloadCatalog();
    this.isAddModalOpen = false;
    this.isSearchModalOpen = false;
    this.isChangeModalOpen = false;
  }

  public closeModal(): void {
    this.isAddModalOpen = false;
    this.isSearchModalOpen = false;
    this.isChangeModalOpen = false;
  }

  private reloadCatalog(): void {
    this.httpService.getPetByStatus('available').pipe(take(1)).subscribe(
      (data: Pet[]) => this.availablePets = data,
      error => console.log(error),
      () => this.availablePets = this.availablePets.filter(pet => pet.id < 9.0071993e+15)
    );
    this.httpService.getPetByStatus('pending').pipe(take(1)).subscribe(
      (data: Pet[]) => this.pendingPets = data,
      error => console.log(error),
      () => this.pendingPets = this.pendingPets.filter(pet => pet.id < 9.0071993e+15)
    );
    this.httpService.getPetByStatus('sold').pipe(take(1)).subscribe(
      (data: Pet[]) => this.soldPets = data,
      error => console.log(error),
      () => this.soldPets = this.soldPets.filter(pet => pet.id < 9.0071993e+15)
    );
  }

  ngOnInit(): void {
    this.reloadCatalog()
  }

  public openChangeModal(pet: Pet): void {
    this.changingPet.id = pet.id;
    this.changingPet.name = pet.name;
    this.changingPet.status = pet.status;
    this.isChangeModalOpen = true;
  }

  public openDeleteModal(id: number): void {
    this.modal.confirm({
      nzTitle: 'Вы действительно хотите удалить животное?',
      nzOkText: 'Да',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () => this.deletePet(id),
      nzCancelText: 'Нет'
    });
  }

  private deletePet(id: number): void {
    this.httpService.deletePet(id).subscribe(() => this.reloadCatalog(),(error) => console.log(error))
  }

}
