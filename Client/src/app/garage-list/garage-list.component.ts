import { Component, OnInit } from '@angular/core';
import { GarageService } from '../services/garage.service';
import { VoitureService } from '../services/voiture.service';
import { Garage } from '../garage';
import { Voiture } from '../Voiture';

@Component({
  selector: 'app-garage-list',
  templateUrl: './garage-list.component.html',
  styleUrls: ['./garage-list.component.css'],
})
export class GarageListComponent implements OnInit {
  garages: [Garage];
  voitures: [Voiture];

  constructor(
    private garageService: GarageService,
    private voitureService: VoitureService
  ) {
    garageService = garageService;
    voitureService = voitureService;
  }

  ngOnInit() {
    this.garageService.getAllGarages().subscribe(res => {
      this.garages = res.json();
    });
    this.voitureService.getAllwithoutGarage().subscribe(res => {
      console.log(res.json());
      if (res.json().length >= 1) this.voitures = res.json();
    });
  }
}
