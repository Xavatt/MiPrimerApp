import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SegmentPageRoutingModule } from './segment-routing.module';

import { SegmentPage } from './segment.page';
import { ComponentesModule } from 'src/app/componentes/componentes.module';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SegmentPageRoutingModule,
    ComponentesModule,
    PipesModule
  ],
  declarations: [SegmentPage]
})
export class SegmentPageModule {}
