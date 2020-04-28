import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ListaComponentes } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http: HttpClient ) { }


  getUsers()
  {
      return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getMenu()
  {
      return this.http.get<ListaComponentes[]>('/assets/data/menu.json');
  }


}
