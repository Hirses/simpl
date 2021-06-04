import {Component, Input} from "@angular/core";
import {HttpService} from "../http.service";

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

}
