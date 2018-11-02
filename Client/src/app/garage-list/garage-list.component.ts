import { Component, OnInit } from '@angular/core';
import { GarageService } from '../services/garage.service';
import { VoitureService } from '../services/voiture.service';
import { MarqueService } from '../services/marque.service';
import { Garage } from '../garage';
import { Voiture } from '../voiture';
import { Marque } from '../marque';

@Component({
  selector: 'app-garage-list',
  templateUrl: './garage-list.component.html',
  styleUrls: ['./garage-list.component.css'],
})
export class GarageListComponent implements OnInit {
  garages: [Garage];
  voitures: [Voiture];
  marques: [Marque];

  showAddGarage = false;
  showAddVoiture = false;
  showMarque = false;

  constructor(
    private garageService: GarageService,
    private voitureService: VoitureService,
    private marqueService: MarqueService
  ) {
    garageService = garageService;
    voitureService = voitureService;
    marqueService = marqueService;
  }

  ngOnInit() {
    this.showAddVoiture = false;
    this.showAddGarage = false;
    this.showMarque = false;

    this.getAllGarages();
    this.getAllwithoutGarage();
    this.getAllMarques();
  }

  getAllGarages() {
    this.garageService.getAllGarages().subscribe(res => {
      this.garages = res.json();
    });
  }
  getAllMarques() {
    this.marqueService.getAllMarques().subscribe(res => {
      this.marques = res.json();
    });
  }
  getAllwithoutGarage() {
    this.voitureService.getAllwithoutGarage().subscribe(res => {
      if (res.json().length >= 1) this.voitures = res.json();
      else this.voitures = null;
    });
  }

  showAddGarageClick() {
    this.showAddVoiture = false;
    this.showMarque = false;
    this.showAddGarage = !this.showAddGarage;
  }
  showAddVoitureClick() {
    this.showAddGarage = false;
    this.showMarque = false;
    this.showAddVoiture = !this.showAddVoiture;
  }
  showMarqueClick() {
    this.showAddGarage = false;
    this.showMarque = !this.showMarque;
    this.showAddVoiture = false;
  }
}
