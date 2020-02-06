import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarrerRoutingModule } from './carrer-routing.module';
import { CarrerComponent } from './carrer.component';

@NgModule({
  declarations: [CarrerComponent],
  imports: [
    CommonModule,
    CarrerRoutingModule
  ]
})
export class CarrerModule { }
