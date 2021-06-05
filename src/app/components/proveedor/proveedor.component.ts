import { Component, OnInit } from '@angular/core';
import { Proveedor } from 'app/Modelos/Proveedor';
import { ProveedorService } from '../../Servicios/Proveedor/proveedor.service';

@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrls: ['./proveedor.component.css']
})
export class ProveedorComponent implements OnInit {

  proveedores:Proveedor[];

  constructor( private proveedorService:ProveedorService) {}

  ngOnInit(): void {
    this.proveedorService.getData().subscribe((data:any[])=>{
      this.proveedores=data;
      console.log(this.proveedores);
    })
  }
}
