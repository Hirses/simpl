import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Pet} from "./pet";

@Injectable()
export class HttpService {
  constructor(private http: HttpClient) { }

  postPet(pet : Pet) {
    return this.http.post('https://petstore.swagger.io/v2/pet', pet);
  }

  getPetByStatus(status : string) {
    return this.http.get(`https://petstore.swagger.io/v2/pet/findByStatus?status=${status}`);
  }

  deletePet(id : number) {
    return this.http.delete(`https://petstore.swagger.io/v2/pet/${id}`);
  }
}
