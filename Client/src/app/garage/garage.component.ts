import { Component, OnInit } from '@angular/core';
import { GarageService } from '../services/garage.service';

@Component({
  selector: 'app-garage',
  templateUrl: './garage.component.html',
  styleUrls: ['./garage.component.css'],
})
export class GarageComponent implements OnInit {
  garages;

  constructor(private garageService: GarageService) {
    garageService = garageService;
  }

  ngOnInit() {
    this.garageService.getAllGarages().subscribe(res => {
      res = res.json();
      this.garages = res;
    });
  }
}
