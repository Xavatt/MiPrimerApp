import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { IonicModule } from '@ionic/angular';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { PopoverinfoComponent } from './popoverinfo/popoverinfo.component';

// Se agrego el modulo RouterModule para que pueda funcionar el routerLink

@NgModule({
  declarations: [
    EncabezadoComponent,
    MenuComponent,
    PopoverinfoComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule    
  ],
  exports: [
    EncabezadoComponent,
    MenuComponent,
    PopoverinfoComponent
  ]
})
export class ComponentesModule { }
