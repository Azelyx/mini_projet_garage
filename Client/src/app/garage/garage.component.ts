import { Component, OnInit } from '@angular/core';
import { GarageService } from '../services/garage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { VoitureService } from '../services/voiture.service';
import { Garage } from '../garage';
import { Voiture } from '../Voiture';

@Component({
  selector: 'app-garage',
  templateUrl: './garage.component.html',
  styleUrls: ['./garage.component.css'],
})
export class GarageComponent implements OnInit {
  garage: Garage;
  newGarage: Garage;
  voitures: [Voiture];
  selectedVoiture: Voiture;
  showEditGarage = false;

  constructor(
    private garageService: GarageService,
    private voituresService: VoitureService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
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

  showEditGarageClick() {
    this.showEditGarage = !this.showEditGarage;
  }
  EditGarage() {
    this.garageService.updateGarage(this.newGarage).subscribe(res => {
      console.log('EditGarage', res.json());
      if (res.json().affectedRows === 1) this.ngOnInit();
    });
  }

  suppGarage(): void {
    this.garageService.deleteGarageById(this.garage.idGarage).subscribe(res => {
      console.log('supp', res.json());
      if (res.json().affectedRows === 1) this.goBack();
    });
  }

  onSelect(voiture: Voiture) {
    this.selectedVoiture = voiture;
  }

  getGarageById() {
    const id = +this.route.snapshot.paramMap.get('id');
    if (this.route.snapshot.paramMap.get('id') !== 'noGarage')
      this.garageService.getGarageById(id).subscribe(res => {
        res = res.json();
        this.garage = res[0];
        this.newGarage = { ...this.garage };
        console.log('garage', this.garage);
      });
  }

  getVoitureByGarageId() {
    const id = +this.route.snapshot.paramMap.get('id');
    if (this.route.snapshot.paramMap.get('id') !== 'noGarage')
      this.voituresService.getVoitureByGarageId(id).subscribe(res => {
        this.voitures = res.json();
        this.selectedVoiture = this.voitures[0];
        console.log('voitures', this.voitures);
      });
    else
      this.voituresService.getAllwithoutGarage().subscribe(res => {
        this.voitures = res.json();
        if (this.voitures.length > 0) this.selectedVoiture = this.voitures[0];
        else this.router.navigate(['/']);
        console.log('voitures', this.voitures);
      });
  }
}
