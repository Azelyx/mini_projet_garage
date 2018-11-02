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
  outputs: ['edited'],
})
export class VoitureEditComponent implements OnInit {
  @Input()
  voiture: Voiture;
  @Output()
  edited = new EventEmitter<boolean>();
  garages: [Garage];

  onSubmit() {
    if (!Number.isInteger(this.voiture.idGarage)) this.voiture.idGarage = null;
    this.voitureServcice.updateVoiture(this.voiture).subscribe(res => {
      if (res.json().affectedRows == 1) this.edited.emit();
    });
  }

  delete() {
    this.voitureServcice
      .deleteVoitureById(this.voiture.idVoiture)
      .subscribe(res => {
        if (res.json().affectedRows == 1) this.edited.emit();
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
