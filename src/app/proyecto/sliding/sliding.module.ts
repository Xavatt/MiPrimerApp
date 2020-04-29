import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SlidingPageRoutingModule } from './sliding-routing.module';

import { SlidingPage } from './sliding.page';
import { ComponentesModule } from 'src/app/componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SlidingPageRoutingModule,
    ComponentesModule
  ],
  declarations: [SlidingPage]
})
export class SlidingPageModule {}
