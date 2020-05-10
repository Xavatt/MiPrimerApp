import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';
import { IonList, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-sliding',
  templateUrl: './sliding.page.html',
  styleUrls: ['./sliding.page.scss'],
})
export class SlidingPage implements OnInit {

  @ViewChild('lista', {static: true}) lista: IonList;

  usuarios: Observable<any>;

  constructor(private dataService: DataService, private toast: ToastController) { }

  ngOnInit() {

    this.usuarios = this.dataService.getUsers();
  }

  async presentToast( message: string ) {
    const toast = await this.toast.create({
      message,
      duration: 2000
    });
    toast.present();
  }


  favorite(us)
  {
    //console.log('favorite', us);
    this.presentToast('Click en Favorito');
    this.lista.closeSlidingItems();
  }
  share(us)
  {
    //console.log('share', us);
    this.presentToast('Compartiste el contacto');
    this.lista.closeSlidingItems();  
  }
  deleted(us)
  {
    //console.log('deleted', us);
    this.presentToast('Elemento borrado');
    this.lista.closeSlidingItems();
  }
}
