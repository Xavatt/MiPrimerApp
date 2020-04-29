import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.page.html',
  styleUrls: ['./slides.page.scss'],
})
export class SlidesPage implements OnInit {


  slides: { img: string, titulo: string, desc: string }[] = [
    {
      img: 'assets/gatito.png',
      titulo: 'Un gato',
      desc: 'Un gatito muy bonito'
    },
    {
      img: 'assets/perrito.png',
      titulo: 'Un perrito',
      desc: 'Un perrito muy bonito'
    },
    {
      img: 'assets/kobe.jpg',
      titulo: 'Kobe Bryant',
      desc: 'Un gran basquetbolista'
    },
  ]

  constructor( private navCtrl: NavController ) { }

  ngOnInit() {
  }

  onClick()
  {
    this.navCtrl.navigateBack('/');
  }

}
