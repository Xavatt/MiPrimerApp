import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  @ViewChild(IonSegment, {static:true}) segment: IonSegment;

  basquet: Observable<any>;
  classification = '';

  constructor( private dataService: DataService ) { }

  ngOnInit() {

    this.segment.value='todos';
    this.basquet = this.dataService.getBasquet();
  }


  segmentChanged( event )
  {
    const valorSegmento = event.detail.value;

    if(valorSegmento === 'todos')
    {
      this.classification = '';
      return;
    }

    this.classification = valorSegmento;

    console.log(valorSegmento);
  }

}
