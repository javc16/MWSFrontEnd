import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TipoUsuario } from 'app/Modelos/TipoUsuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipoUsuarioService {

  private url:string;

  constructor(private http: HttpClient) 

  {

    this.url =  "https://demo.evdapps.com/api/TipoUsuario";

  }

  getData(): Observable<TipoUsuario[]> {

    return this.http.get<TipoUsuario[]>(this.url);

  }
}
