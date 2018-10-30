import { Component, OnInit } from '@angular/core';
import { GarageService } from '../services/garage.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { VoitureService } from '../services/voiture.service';

@Component({
  selector: 'app-garage',
  templateUrl: './garage.component.html',
  styleUrls: ['./garage.component.css'],
})
export class GarageComponent implements OnInit {
  garage;
  voitures;

  constructor(
    private garageService: GarageService,
    private voituresService: VoitureService,
    private route: ActivatedRoute,
    private location: Location
  ) {
    garageService = garageService;
  }

  ngOnInit() {
    this.getGarageById();
    this.getVoitureByGarageId();
  }

  goBack(): void {
    this.location.back();
  }

  getGarageById() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.garageService.getGarageById(id).subscribe(res => {
      res = res.json();
      this.garage = res[0];
    });
  }

  getVoitureByGarageId() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.voituresService.getVoitureByGarageId(id).subscribe(res => {
      res = res.json();
      console.log(res);
      this.voitures = res;
    });
  }
}
