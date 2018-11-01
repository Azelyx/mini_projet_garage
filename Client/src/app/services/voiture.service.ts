import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Http } from '@angular/http';
import { Voiture } from '../voiture';

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

  public getAllwithoutGarage() {
    return this.http.get(API_URL + '/voiture/noGarage/');
  }

  // API: POST /voiture
  public createVoiture(voiture: Voiture) {
    return this.http.post(API_URL + '/voiture', voiture);
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
  public updateVoiture(voiture: Voiture) {
    return this.http.put(API_URL + '/voiture/' + voiture.idVoiture, voiture);
  }

  // DELETE /voiture/:id
  public deleteVoitureById(voitureId: number) {
    return this.http.delete(API_URL + '/voiture/' + voitureId);
  }
}
