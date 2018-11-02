import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GarageComponent } from './garage/garage.component';
import { GarageListComponent } from './garage-list/garage-list.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { VoitureEditComponent } from './voiture-edit/voiture-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    GarageComponent,
    GarageListComponent,
    VoitureEditComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
