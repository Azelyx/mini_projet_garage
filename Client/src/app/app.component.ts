import { Component } from '@angular/core';
import { Garage } from './garage';
//import {Voiture} from './voiture';
import { GarageService } from './services/garage.service';
import { VoitureService } from './services/voiture.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

//@Input() garage: Garage;
export class AppComponent {
  title = 'Mini projet Garage';
  showAddGarage = false;
  garage = new Garage();

  constructor(
    private garageService: GarageService,
    private voituresService: VoitureService
  ) {
    garageService = garageService;
    voituresService = voituresService;
  }

  addGarage() {
    this.showAddGarage = !this.showAddGarage;
    console.log('addGarage');
  }

  addVoiture() {
    console.log('addVoiture');
  }
}
