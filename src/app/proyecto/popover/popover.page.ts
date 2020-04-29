import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverinfoComponent } from 'src/app/componentes/popoverinfo/popoverinfo.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor( private popoverCtrl : PopoverController ) { }

  ngOnInit() {
  }

async mostrar( evento )
{
  const popover = await this.popoverCtrl.create({
    component: PopoverinfoComponent,
    event: evento,
    mode: 'ios',
    backdropDismiss: false
  });

  await popover.present();

  const { data } = await popover.onDidDismiss();

  console.log('Padre: ', data);
}

}
