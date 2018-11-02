import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Garage } from '../garage';
import { GarageService } from '../services/garage.service';

@Component({
  selector: 'app-garage-edit',
  templateUrl: './garage-edit.component.html',
  styleUrls: ['./garage-edit.component.css'],
  inputs: ['garage'],
  outputs: ['edited'],
})
export class GarageEditComponent {
  @Input()
  garage: Garage;
  @Output()
  edited = new EventEmitter<boolean>();

  constructor(private garageService: GarageService) {
    garageService = garageService;
  }

  EditGarage() {
    this.garageService.updateGarage(this.garage).subscribe(res => {
      console.log('EditGarage', res.json());
      if (res.json().affectedRows === 1) this.edited.emit();
    });
  }
}
