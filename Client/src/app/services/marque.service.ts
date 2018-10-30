import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Http } from '@angular/http';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class MarqueService {
  constructor(private http: Http) {}

  // API: GET /marques
  public getAllMarques() {
    return this.http.get(API_URL + '/marque');
  }

  // API: POST /marque
  public createMarque(body) {
    return this.http.post(API_URL + '/marque', body);
  }

  // API: GET /marque/:id
  public getMarqueById(marqueId: number) {
    return this.http.get(API_URL + '/marque/' + marqueId);
  }

  // API: PUT /marque/:id
  public updateMarque(id, body) {
    return this.http.put(API_URL + '/marque/' + id, body);
  }

  // DELETE /marque/:id
  public deleteMarqueById(marqueId: number) {
    return this.http.delete(API_URL + '/marque/' + marqueId);
  }
}
