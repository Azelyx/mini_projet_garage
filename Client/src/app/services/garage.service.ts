import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Http } from '@angular/http';
import { Garage } from '../garage';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class GarageService {
  constructor(private http: Http) {}

  // API: GET /garages
  public getAllGarages() {
    return this.http.get(API_URL + '/garage');
  }

  // API: POST /garage
  public createGarage(garage: Garage) {
    return this.http.post(API_URL + '/garage', garage);
  }

  // API: GET /garage/:id
  public getGarageById(garageId: number) {
    return this.http.get(API_URL + '/garage/' + garageId);
  }

  // API: PUT /garage/:id
  public updateGarage(garage: Garage) {
    return this.http.put(API_URL + '/garage/' + garage.idGarage, garage);
  }

  // DELETE /garage/:id
  public deleteGarageById(garageId: number) {
    return this.http.delete(API_URL + '/garage/' + garageId);
  }
}
