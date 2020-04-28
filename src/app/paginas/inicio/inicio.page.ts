import { Component, OnInit } from '@angular/core';

interface ListaComponentes{
  name: string;
  icon: string;
  redirectTo: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  lista: ListaComponentes[] = [
    {
      name: 'Action Sheet',
      icon: 'alert-circle-outline',
      redirectTo: '/action-sheet',
    },
    {
      name: 'Alert',
      icon: 'happy-outline',
      redirectTo: '/alert',
    },
    {
      name: 'Avatar',
      icon: 'body-outline',
      redirectTo: '/avatar',
    },
    {
      name: 'Botones',
      icon: 'cube-outline',
      redirectTo: '/botones',
    },
    {
      name: 'Card',
      icon: 'document-text-outline',
      redirectTo: '/card',
    },
    {
      name: 'CheckBox',
      icon: 'checkmark-outline',
      redirectTo: '/checkbox',
    },
    {
      name: 'Date Time',
      icon: 'calendar-outline',
      redirectTo: '/datetime',
    },
    {
      name: 'Fab',
      icon: 'ellipsis-vertical-circle-outline',
      redirectTo: '/fab',
    },
    {
      name: 'Grid',
      icon: 'grid-outline',
      redirectTo: '/grid',
    },
    {
      name: 'Infinite Scroll',
      icon: 'flame-outline',
      redirectTo: '/infinite-scroll',
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

