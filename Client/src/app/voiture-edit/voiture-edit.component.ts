import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Voiture } from '../voiture';
import { GarageService } from '../services/garage.service';
import { Garage } from '../garage';
import { VoitureService } from '../services/voiture.service';

@Component({
  selector: 'app-voiture-edit',
  templateUrl: './voiture-edit.component.html',
  styleUrls: ['./voiture-edit.component.css'],
  inputs: ['voiture'],
  outputs: ['changed'],
})
export class VoitureEditComponent implements OnInit {
  @Input()
  voiture: Voiture;
  @Output()
  changed = new EventEmitter<boolean>();
  garages: [Garage];

  onSubmit() {
    console.log('new : ', this.voiture);
    if (!Number.isInteger(this.voiture.idGarage)) this.voiture.idGarage = null;
    this.voitureServcice.updateVoiture(this.voiture).subscribe(res => {
      console.log('onSubmit res : ', res.json());
      if (res.json().affectedRows == 1) this.changed.emit();
    });
  }

  delete() {
    console.log('delete');
    this.voitureServcice.updateVoiture(this.voiture).subscribe(res => {
      console.log('onSubmit res : ', res.json());
      if (res.json().affectedRows == 1) this.changed.emit();
    });
  }

  constructor(
    private garageService: GarageService,
    private voitureServcice: VoitureService
  ) {
    garageService = garageService;
    voitureServcice = voitureServcice;
  }

  ngOnInit() {
    this.garageService.getAllGarages().subscribe(res => {
      this.garages = res.json();
    });
  }
}
