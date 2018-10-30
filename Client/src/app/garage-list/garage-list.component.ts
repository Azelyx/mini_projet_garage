import { Component, OnInit } from '@angular/core';
import { GarageService } from '../services/garage.service';

@Component({
  selector: 'app-garage-list',
  templateUrl: './garage-list.component.html',
  styleUrls: ['./garage-list.component.css'],
})
export class GarageListComponent implements OnInit {
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
