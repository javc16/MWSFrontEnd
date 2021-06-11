import { Component, OnInit } from '@angular/core';
import { TipoUsuario } from 'app/Modelos/TipoUsuario';
import { TipoUsuarioService } from 'app/Servicios/TipoUsuario/tipo-usuario.service';

@Component({
  selector: 'app-tipo-usuario',
  templateUrl: './tipo-usuario.component.html',
  styleUrls: ['./tipo-usuario.component.css']
})
export class TipoUsuarioComponent implements OnInit {
  tipoUssuarios: TipoUsuario[];
  displayedColumns: string[] = ['id', 'descripcion','action'];
  constructor(private _tipoUsuarioService:TipoUsuarioService) {}

  ngOnInit(): void {
    this._tipoUsuarioService.getData().subscribe((data:any[])=>{
      this.tipoUssuarios=data;
      console.log(this.tipoUssuarios);
    })
  }

}
