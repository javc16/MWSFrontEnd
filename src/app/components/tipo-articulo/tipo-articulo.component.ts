import { Component, OnInit } from '@angular/core';
import { TipoArticulo } from '../../Modelos/TipoArticulo';
import { TipoArticuloService } from '../../Servicios/TipoArticulo/tipo-articulo.service';

@Component({
  selector: 'app-tipo-articulo',
  templateUrl: './tipo-articulo.component.html',
  styleUrls: ['./tipo-articulo.component.css']
})
export class TipoArticuloComponent implements OnInit {

  tipoArticulos: TipoArticulo[];

  constructor(private tipoArticuloService:TipoArticuloService) {}

  ngOnInit(): void {
    this.tipoArticuloService.getData().subscribe((data:any[])=>{
      this.tipoArticulos=data;
      console.log(this.tipoArticulos);
    })
  }

}
