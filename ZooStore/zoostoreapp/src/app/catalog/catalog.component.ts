import {Component, OnInit, Output} from "@angular/core";
import {Pet} from "../pet";
import {HttpService} from "../http.service";

@Component({
  selector: 'app-catalog',
  styleUrls: ['catalog.component.scss'],
  templateUrl: 'catalog.component.html',
  providers: [HttpService]
})
export class CatalogComponent implements OnInit{
  creatingPet: Pet = new Pet(0, {id: 0, name: ''}, '', [''], [{id: 0, name: ''}], '')
  public isAddModalOpen: boolean = false;
  public isSearchModalOpen: boolean = false;
  public donePostPet: boolean = false;
  public foundPets: Pet[] = [];
  @Output() availablePets: Pet[] | any;
  @Output() pendingPets: Pet[] | any;
  @Output() soldPets: Pet[] | any;
  public searchInputValue: string = '';
  public isFoundPets: boolean = false;

  constructor(private httpService: HttpService) {
  }

  showModal() {
    this.isAddModalOpen = true;
  }

  closeModal() {
    this.isAddModalOpen = false;
    this.isSearchModalOpen = false;
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
        this.foundPets = concatPets.filter(pet => (typeof pet.name === 'string') && (pet.name !== '') && (pet.name.toUpperCase().indexOf(word.toUpperCase()) > -1));
      } catch (err) {
        console.log(`something wrong...
        ${err}`);
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
      error => console.log(error));
    this.httpService.getPetByStatus('pending').subscribe(
      (data: any) => this.pendingPets = data,
      error => console.log(error));
    this.httpService.getPetByStatus('sold').subscribe(
      (data: any) => this.soldPets = data,
      error => console.log(error));
  }

  ngOnInit() {
    this.reloadCatalog()
  }

}
