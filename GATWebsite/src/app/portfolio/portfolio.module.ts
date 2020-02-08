import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioComponent } from './portfolio.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PortfolioComponent],
  imports: [
    SharedModule,
    PortfolioRoutingModule
  ]
})
export class PortfolioModule { }
