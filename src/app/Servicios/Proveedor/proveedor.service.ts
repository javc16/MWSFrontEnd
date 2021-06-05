import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proveedor } from '../../Modelos/Proveedor';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  private url:string;

  constructor(private http: HttpClient) 

  {

    this.url =  "https://demo.evdapps.com/api/proveedor";

  }

  getData(): Observable<Proveedor[]> {

    return this.http.get<Proveedor[]>(this.url);

  }
}
