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
    return this.http.get(API_URL + '/garage');
  }

  // API: POST /garage
  public createGarage(body) {
    return this.http.post(API_URL + '/garage', body);
  }

  // API: GET /garage/:id
  public getGarageById(garageId: number) {
    return this.http.get(API_URL + '/garage/' + garageId);
  }

  // API: PUT /garage/:id
  public updateGarage(id, body) {
    return this.http.put(API_URL + '/garage/' + id, body);
  }

  // DELETE /garage/:id
  public deleteGarageById(garageId: number) {
    return this.http.delete(API_URL + '/garage/' + garageId);
  }
}
