import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

interface ListaComponente{
  name: string;
  icon: string;  
}

interface Perro{
  nombre: string;
}

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.page.html',
  styleUrls: ['./avatar.page.scss'],
})
export class AvatarPage implements OnInit {

  
nombre: string;
conteoPerros = 0;

Perro: Perro[] = []
listadoPerro: Array<Perro> = this.Perro;


  listaPerro: ListaComponente[] = [
    {
      name: 'Avatar Perrito',
      icon: '/assets/perrito.png'
    }
  ]

  incrementoPerro()
  {    
    console.log('Confirm Ok');          
    this.conteoPerros = this.conteoPerros + 1;
    console.log(this.conteoPerros);
    this.listadoPerro.push({nombre: this.nombre})
  }

  constructor(public alertController: AlertController) { }

  async presentAlertPrompt() {
    
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
            this.nombre = datos.txtNombre;           
            this.incrementoPerro();
          }
        }
      ]
    });
   
    await alert.present();
  }

  ngOnInit() {
  }



}
