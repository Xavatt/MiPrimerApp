import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-sliding',
  templateUrl: './sliding.page.html',
  styleUrls: ['./sliding.page.scss'],
})
export class SlidingPage implements OnInit {

  @ViewChild('lista', {static: true}) lista: IonList;

  usuarios: Observable<any>;

  constructor(private dataService: DataService) { }

  ngOnInit() {

    this.usuarios = this.dataService.getUsers();
  }


  favorite(us)
  {
    console.log('favorite', us);
    this.lista.closeSlidingItems();
  }
  share(us)
  {
    console.log('share', us);
    this.lista.closeSlidingItems();  
  }
  deleted(us)
  {
    console.log('deleted', us);
    this.lista.closeSlidingItems();
  }
}
