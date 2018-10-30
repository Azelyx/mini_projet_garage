import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GarageComponent } from './garage/garage.component';
import { GarageListComponent } from './garage-list/garage-list.component';

const routes: Routes = [
  { path: '', component: GarageListComponent },
  { path: 'garage/:id', component: GarageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
