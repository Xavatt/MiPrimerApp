import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ListaComponentes } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http: HttpClient ) { }

// Funcion para poder imprimir lista y es ocupada en sliding
  getUsers()
  {
      return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  // Funcion para poder mandar llamar la lista de menu y poder desplegarla
  getMenu()
  {
      return this.http.get<ListaComponentes[]>('/assets/data/menu.json');
  }

  getComments()
  {
      return this.http.get<any[]>('https://jsonplaceholder.typicode.com/comments');
  }



}
