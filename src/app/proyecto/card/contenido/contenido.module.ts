import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContenidoPageRoutingModule } from './contenido-routing.module';

import { ContenidoPage } from './contenido.page';
import { ComponentesModule } from 'src/app/componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContenidoPageRoutingModule,
    ComponentesModule
  ],
  declarations: [ContenidoPage]
})
export class ContenidoPageModule {}
