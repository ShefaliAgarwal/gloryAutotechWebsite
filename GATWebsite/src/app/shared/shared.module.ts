import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FooterComponent } from './component/footer/footer.component';

@NgModule({
  declarations: [FooterComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    FooterComponent
  ]
})
export class SharedModule { }
