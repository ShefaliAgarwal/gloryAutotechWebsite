import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarrerRoutingModule } from './carrer-routing.module';
import { CarrerComponent } from './carrer.component';
import { DescriptionComponent } from './description/description.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CarrerComponent, DescriptionComponent],
  imports: [
    SharedModule,
    CarrerRoutingModule
  ]
})
export class CarrerModule { }
