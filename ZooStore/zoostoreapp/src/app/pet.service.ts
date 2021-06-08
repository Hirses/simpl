import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Pet} from "./pet";
import {Observable} from "rxjs";

@Injectable()
export class PetService {
  private url: string = 'https://petstore.swagger.io/v2';
  private controller: string = `${this.url}/pet`

  constructor(private http: HttpClient) {
  }

  public postPet = (pet: Pet): Observable<Object> => this.http.post(`${this.controller}`, pet);

  public getPetByStatus(status: string): Observable<Pet[]> {
    // @ts-ignore
    return this.http.get(`${this.controller}/findByStatus?status=${status}`);
  }

  public deletePet = (id: number): Observable<Object> => this.http.delete(`${this.controller}/${id}`);

  public changePet = (body: Pet): Observable<Object> => this.http.put(`${this.controller}`, body);
}
