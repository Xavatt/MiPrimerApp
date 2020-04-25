import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

interface ListaComponenteP{
  name: string;
  icon: string;  
}

interface ListaComponenteG{
  name: string;
  icon: string;  
}

interface Perro{
  nombreP: string;
}

interface Gato{
  nombreG: string;
}

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.page.html',
  styleUrls: ['./avatar.page.scss'],
})
export class AvatarPage implements OnInit {

  
nombreP: string;
conteoPerros = 0;

nombreG: string;
conteoGatos = 0;

Perro: Perro[] = []
listadoPerro: Array<Perro> = this.Perro;

Gato: Gato[] = []
listadoGato: Array<Gato> = this.Gato;

  listaPerro: ListaComponenteP[] = [
    {
      name: 'Avatar Perrito',
      icon: '/assets/perrito.png'
    }
  ]

  listaGato: ListaComponenteG[] = [
    {
      name: 'Avatar Gato',
      icon: '/assets/gatito.png'
    }
  ]

  incrementoPerro()
  {    
    console.log('Confirm Ok');          
    this.conteoPerros = this.conteoPerros + 1;
    console.log(this.conteoPerros);
    this.listadoPerro.push({nombreP: this.nombreP})
  }


  incrementoGato()
  {    
    console.log('Confirm Ok');          
    this.conteoGatos = this.conteoGatos + 1;
    console.log(this.conteoGatos);
    this.listadoGato.push({nombreG: this.nombreG})
  }

  constructor(public alertController: AlertController) { }

  async PromptPerro() {
    
    const alert = await this.alertController.create({
      header: 'Perros!',
      backdropDismiss: false,
      inputs: [
        {
          name: 'txtNombre',
          type: 'text',
          placeholder: 'Dame un nombre'                       
        },        
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (datos) => {
            console.log('Confirm Ok',datos);
            this.nombreP = datos.txtNombre;           
            this.incrementoPerro();
          }
        }
      ]
    });
   
    await alert.present();
  }

  async PromptGato() {
    
    const alert = await this.alertController.create({
      header: 'Gatos!',
      backdropDismiss: false,
      inputs: [
        {
          name: 'txtNombre',
          type: 'text',
          placeholder: 'Dame un nombre'                       
        },        
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (datos) => {
            console.log('Confirm Ok',datos);
            this.nombreG = datos.txtNombre;           
            this.incrementoGato();
          }
        }
      ]
    });
   
    await alert.present();
  }

  ngOnInit() {
  }



}
