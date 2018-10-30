import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Http } from '@angular/http';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class VoitureService {
  constructor(private http: Http) {}

  // API: GET /voitures
  public getAllVoitures() {
    return this.http.get(API_URL + '/voiture');
  }

  // API: POST /voiture
  public createVoiture(body) {
    return this.http.post(API_URL + '/voiture', body);
  }

  // API: GET /voiture/garage/:id
  public getVoitureByGarageId(garageId: number) {
    return this.http.get(API_URL + '/voiture/garage/' + garageId);
  }

  // API: GET /voiture/:id
  public getVoitureById(voitureId: number) {
    return this.http.get(API_URL + '/voiture/' + voitureId);
  }

  // API: PUT /voiture/:id
  public updateVoiture(id, body) {
    return this.http.put(API_URL + '/voiture/' + id, body);
  }

  // DELETE /voiture/:id
  public deleteVoitureById(voitureId: number) {
    return this.http.delete(API_URL + '/voiture/' + voitureId);
  }
}
