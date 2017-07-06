import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material.module';
import { VerticalService } from './vertical.service';
import { VerticalComponent } from './vertical.component';
import { VerticalCardComponent } from './vertical-card/vertical-card.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [VerticalComponent, VerticalCardComponent],
  providers: [VerticalService]
})
export class VerticalModule { }
