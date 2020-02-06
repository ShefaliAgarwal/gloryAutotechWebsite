import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarrerRoutingModule } from './carrer-routing.module';
import { CarrerComponent } from './carrer.component';
import { DescriptionComponent } from './description/description.component';

@NgModule({
  declarations: [CarrerComponent, DescriptionComponent],
  imports: [
    CommonModule,
    CarrerRoutingModule
  ]
})
export class CarrerModule { }
