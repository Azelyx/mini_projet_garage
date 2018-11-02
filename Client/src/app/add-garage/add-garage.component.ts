import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GarageService } from '../services/garage.service';
import { Garage } from '../garage';

@Component({
  selector: 'app-add-garage',
  templateUrl: './add-garage.component.html',
  styleUrls: ['./add-garage.component.css'],
  outputs: ['newGarage'],
})
export class AddGarageComponent {
  @Output()
  newGarage = new EventEmitter<boolean>();
  garage = new Garage();

  constructor(private garageService: GarageService) {
    garageService = garageService;
  }

  addGarage() {
    console.log('addGarage', this.garage);
    this.garageService.createGarage(this.garage).subscribe(res => {
      console.log('addGarage', res.json());
      this.newGarage.emit();
    });
  }
}
