import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Http } from '@angular/http';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class GarageService {
  constructor(private http: Http) {}

  // API: GET /garages
  public getAllGarages() {
    return this.http.get(API_URL + '/garages');
  }

  // API: POST /garages
  public createGarage(body) {
    return this.http.post(API_URL + '/garages', body);
  }

  // API: GET /garages/:id
  public getGarageById(garageId: number) {
    return this.http.get(API_URL + '/garages/' + garageId);
  }

  // API: PUT /garages/:id
  public updateGarage(id, body) {
    return this.http.put(API_URL + '/garage/' + id, body);
  }

  // DELETE /garages/:id
  public deleteGarageById(garageId: number) {
    return this.http.delete(API_URL + '/garage/' + garageId);
  }
}
