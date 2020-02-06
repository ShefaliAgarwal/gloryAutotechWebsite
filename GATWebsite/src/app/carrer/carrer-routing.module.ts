import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarrerComponent } from './carrer.component';
import { DescriptionComponent } from './description/description.component';

const routes: Routes = [
  {
    path: '',
    component: CarrerComponent
  },
  {
    path: 'description/:id',
    component: DescriptionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarrerRoutingModule { }
