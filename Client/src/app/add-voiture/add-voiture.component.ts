import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Voiture } from '../voiture';
import { VoitureService } from '../services/voiture.service';
import { Marque } from '../marque';
import { Garage } from '../garage';

@Component({
  selector: 'app-add-voiture',
  templateUrl: './add-voiture.component.html',
  styleUrls: ['./add-voiture.component.css'],
  inputs: ['data'],
  outputs: ['newVoiture'],
})
export class AddVoitureComponent {
  @Input()
  data: { marques: [Marque]; garages: [Garage] };
  @Output()
  newVoiture = new EventEmitter<boolean>();

  voiture = new Voiture();

  constructor(private voitureService: VoitureService) {
    voitureService = voitureService;
  }

  addVoiture() {
    if (!Number.isInteger(this.voiture.idGarage)) this.voiture.idGarage = null;
    this.voitureService.createVoiture(this.voiture).subscribe(res => {
      console.log('addVoiture', res.json());
      this.newVoiture.emit();
    });
  }
}
