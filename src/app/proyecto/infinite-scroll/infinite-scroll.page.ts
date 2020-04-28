import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';



@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage implements OnInit {
@ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

dato: any[] = Array(20);



  loadData(event)
  {
    console.log('Cargando los demas elementos');
    setTimeout(() => {

      if(this.dato.length > 50)
      {
        event.target.complete();
        this.infiniteScroll.disabled = true;
        return;
      }

      console.log('Done');
      const listado = Array(20);
      this.dato.push( ...listado);    
      event.target.complete();}
      , 1000)
  }

  constructor() { }

 

  ngOnInit() {
  }

}
