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
    if (this.route.snapshot.paramMap.get('id') !== 'noGarage')
      this.garageService.getGarageById(id).subscribe(res => {
        res = res.json();
        this.garage = res[0];
        console.log('garage', this.garage);
      });
    else this.garage = { nomGarage: 'Voitures sans garage' };
  }

  getVoitureByGarageId() {
    const id = +this.route.snapshot.paramMap.get('id');
    if (this.route.snapshot.paramMap.get('id') !== 'noGarage')
      this.voituresService.getVoitureByGarageId(id).subscribe(res => {
        res = res.json();
        this.voitures = res;
        console.log('voitures', this.voitures);
      });
    else
      this.voituresService.getAllwithoutGarage().subscribe(res => {
        res = res.json();
        this.voitures = res;
        console.log('voitures', this.garage);
      });
  }
}
