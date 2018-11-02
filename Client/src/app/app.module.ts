import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GarageComponent } from './garage/garage.component';
import { GarageListComponent } from './garage-list/garage-list.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { VoitureEditComponent } from './voiture-edit/voiture-edit.component';
import { AddGarageComponent } from './add-garage/add-garage.component';
import { AddVoitureComponent } from './add-voiture/add-voiture.component';
import { AddMarqueComponent } from './add-marque/add-marque.component';
import { ShowMarqueComponent } from './show-marque/show-marque.component';
import { GarageEditComponent } from './garage-edit/garage-edit.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    GarageComponent,
    GarageListComponent,
    VoitureEditComponent,
    AddGarageComponent,
    AddVoitureComponent,
    AddMarqueComponent,
    ShowMarqueComponent,
    GarageEditComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
