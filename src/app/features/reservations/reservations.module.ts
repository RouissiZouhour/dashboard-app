import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationsRoutingModule } from './reservations-routing.module';
import { ReservationsComponent } from './reservation.component';
import { MatTableModule } from '@angular/material/table';
import { MaterialModule } from '../../shared/material.module'; 
import { ReactiveFormsModule } from '@angular/forms'; // Importer ReactiveFormsModule
import { ReservationFormComponent } from './reservation-form.component';
@NgModule({
  
  declarations: [
    ReservationsComponent,
    ReservationFormComponent
  ],
  imports: [
    CommonModule,
    ReservationsRoutingModule,
    MatTableModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class ReservationsModule { }
