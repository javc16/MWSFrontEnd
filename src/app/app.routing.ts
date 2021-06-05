import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { TestComponentComponent } from './components/test-component/test-component.component';
import { ProveedorComponent } from './components/proveedor/proveedor.component';
import { TipoArticuloComponent } from './components/tipo-articulo/tipo-articulo.component';

const routes: Routes =[

  {
    path: 'proveedor',
    component: ProveedorComponent,
  },

  {
    path: 'tipoArticulo',
    component: TipoArticuloComponent,
  },

  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },  {
    path: 'hola',
    component: TestComponentComponent,

  }, {
    path: '',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
    }]
  },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
