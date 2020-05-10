import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-serch',
  templateUrl: './serch.page.html',
  styleUrls: ['./serch.page.scss'],
})
export class SerchPage implements OnInit {

  Comment: any[] = [];
  textoBuscar = '';

  constructor( private dataService: DataService ) { }

  ngOnInit( ) {

    this.dataService.getComments()
    .subscribe(Comment => {
    console.log(Comment);
    this.Comment = Comment;
    })

  }


  buscar(event)
  {
    //console.log(event);
    this.textoBuscar = event.detail.value;
  }
}
