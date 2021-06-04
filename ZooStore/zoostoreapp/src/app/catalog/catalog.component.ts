import {Component} from "@angular/core";
import {Pet} from "../pet";
import {HttpService} from "../http.service";

@Component({
  selector: 'app-catalog',
  styleUrls: ['catalog.component.scss'],
  templateUrl: 'catalog.component.html',
  providers: [HttpService]
})
export class CatalogComponent {
  creatingPet : Pet = new Pet(0, {id: 0, name:''}, '', [''], [{id :0, name: ''}], '')
  public isAddModalOpen : boolean = false;
  public isSearchModalOpen : boolean = false;
  public donePostPet : boolean = false;
  public foundPets : Pet[] = [];
  public availablePets : Pet[] | any;
  public pendingPets : Pet[] | any;
  public soldPets : Pet[] | any;
  public searchInputValue : string = '';
  public isFoundPets : boolean = false;

  constructor(private httpService : HttpService) { }

  showModal() {
    this.isAddModalOpen = true;
  }

  closeModal() {
    this.isAddModalOpen = false;
    this.isSearchModalOpen = false;
  }

  submit(pet : Pet) {
    this.httpService.postPet(pet).subscribe((data : any) => {
      this.creatingPet = data;
    },
      error => console.log(error)
    )
  }

  searchPet(word : string) {
    this.isFoundPets = false;
    this.foundPets = [];

    if (word !== '') {
      let concatPets: Pet[] = this.foundPets = this.availablePets.concat(this.pendingPets).concat(this.soldPets);
      this.foundPets = concatPets.filter(item => item.name.toLowerCase().indexOf(word.toLowerCase()) > -1);
    }

    if (this.foundPets.length === 0 || word === ''){
      this.isFoundPets = true;
    }

    this.isSearchModalOpen = true;
  }


  ngOnInit() {
    this.httpService.getPetByStatus('available').subscribe((data : any ) => this.availablePets = data);
    this.httpService.getPetByStatus('pending').subscribe((data: any) => this.pendingPets = data);
    this.httpService.getPetByStatus('sold').subscribe((data: any) => this.soldPets = data);
  }
}
