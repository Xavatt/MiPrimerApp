import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SerchPageRoutingModule } from './serch-routing.module';

import { SerchPage } from './serch.page';
import { ComponentesModule } from 'src/app/componentes/componentes.module';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SerchPageRoutingModule,
    ComponentesModule,
    PipesModule
  ],
  declarations: [SerchPage]
})
export class SerchPageModule {}
