import { Component, OnInit } from '@angular/core';
import { GarageService } from '../services/garage.service';
import { VoitureService } from '../services/voiture.service';
import {MarqueService} from '../services/marque.service':
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
  garage = new Garage();
  showAddVoiture = false;

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
    this.garageService.getAllGarages().subscribe(res => {
      this.garages = res.json();
    });
    this.voitureService.getAllwithoutGarage().subscribe(res => {
      if (res.json().length >= 1) this.voitures = res.json();
    });
    this.marqueService.getAllMarques().subscribe(res => {
      this.marques = res.json();
    });
  }

  showAddGarageClick() {
    this.showAddVoiture = false;
    this.showAddGarage = !this.showAddGarage;
  }
  addGarage() {
    console.log('addGarage', this.garage);
    this.garageService.createGarage(this.garage).subscribe(res => {
      console.log(res.json());
      this.ngOnInit();
    });
  }

  showAddVoitureClick() {
    this.showAddGarage = false;
    this.showAddVoiture = !this.showAddVoiture;
  }
