import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabInicialPage } from './tab-inicial.page';

const routes: Routes = [
  {
    path: '',
    component: TabInicialPage,
    children:[
      {
        path: 'proyecto',
        loadChildren: () => import('./../../page/proyecto/proyecto.module').then( m => m.ProyectoPageModule)
      },
      {
        path: 'registro',
        loadChildren: () => import('./../../page/registro/registro.module').then( m => m.RegistroPageModule)
      },
      {
        path: 'mensajeria',
        loadChildren: () => import('./../../page/mensajeria/mensajeria.module').then( m => m.MensajeriaPageModule)
      },
      {
        path: 'archivo',
        loadChildren: () => import('./../../page/archivo/archivo.module').then( m => m.ArchivoPageModule)
      },
      {
        path: 'formulario',
        loadChildren: () => import('./../../page/formulario/formulario.module').then( m => m.FormularioPageModule)
      },
      {
        path: 'contacto',
        loadChildren: () => import('./../../page/contacto/contacto.module').then( m => m.ContactoPageModule)
      },
      {
        path: 'perfil',
        loadChildren: () => import('./../../page/perfil/perfil.module').then( m => m.PerfilPageModule)
      },
      {
        path: 'notificacion',
        loadChildren: () => import('./../../page/notificacion/notificacion.module').then( m => m.NotificacionPageModule)
      },
      {
        path: 'inicio',
        loadChildren: () => import('./../../page/inicio/inicio.module').then( m => m.InicioPageModule)
      },
      {
        path: 'ayuda',
        loadChildren: () => import('./../../page/ayuda/ayuda.module').then( m => m.AyudaPageModule)
      },
      {
        path: 'configuracion',
        loadChildren: () => import('./../../page/configuracion/configuracion.module').then( m => m.ConfiguracionPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabInicialPageRoutingModule {}
