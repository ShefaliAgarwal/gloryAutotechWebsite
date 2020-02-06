import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './dashboard/dashboard.module#DashboardModule' },
  { path: 'carrer', loadChildren: './carrer/carrer.module#CarrerModule' },
  { path: 'contact', loadChildren: './contact/contact.module#ContactModule' },
  { path: 'portfolio', loadChildren: './portfolio/portfolio.module#PortfolioModule' },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
