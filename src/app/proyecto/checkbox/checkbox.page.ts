import { Component, OnInit } from '@angular/core';
import { getLocaleFirstDayOfWeek } from '@angular/common';

interface revisionLista{
  id: number;
  val: string;
  checked: boolean;
  col: string;
}



@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.page.html',
  styleUrls: ['./checkbox.page.scss'],
})
export class CheckboxPage implements OnInit {

id: number;
nombreP: string;



lista: revisionLista[] = [
  {
    id: 1,
    val: 'Xavier',
    checked: true,
    col: 'danger'
  },
  {
    id: 2,
    val: 'Jorge',
    checked: false,
    col: 'dark'
  },
  {
    id: 3,
    val: 'Zaira',
    checked: true,
    col: 'light'
  }
]

  

  constructor() { }

  ngOnInit() {
  }

  revision( check )
  {    
    console.log(check);                
  }

}
