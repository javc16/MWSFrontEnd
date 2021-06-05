import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TipoArticulo } from 'app/Modelos/TipoArticulo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipoArticuloService {

  private url:string;

  constructor(private http: HttpClient) 

  {

    this.url =  "https://demo.evdapps.com/api/TipoArticulo";

  }

  getData(): Observable<TipoArticulo[]> {

    return this.http.get<TipoArticulo[]>(this.url);

  }

}
