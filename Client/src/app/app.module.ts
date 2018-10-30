import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GarageComponent } from './garage/garage.component';

@NgModule({
  declarations: [AppComponent, GarageComponent],
  imports: [BrowserModule, HttpModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
