import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SerchPageRoutingModule } from './serch-routing.module';

import { SerchPage } from './serch.page';
import { ComponentesModule } from 'src/app/componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SerchPageRoutingModule,
    ComponentesModule
  ],
  declarations: [SerchPage]
})
export class SerchPageModule {}
