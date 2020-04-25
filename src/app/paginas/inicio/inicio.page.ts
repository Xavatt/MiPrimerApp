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
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

