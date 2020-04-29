import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popoverinfo',
  templateUrl: './popoverinfo.component.html',
  styleUrls: ['./popoverinfo.component.scss'],
})
export class PopoverinfoComponent implements OnInit {

  items = Array(15);

  constructor( private popoverCtrl: PopoverController ) { }

  ngOnInit() {}

  onClick( val: number )
  {
    console.log('item:', val);
    this.popoverCtrl.dismiss({
      item: val
    });
  }

}
