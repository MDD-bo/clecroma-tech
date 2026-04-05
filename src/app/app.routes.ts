import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home';
import { ServiciosComponent } from './components/pages/servicios/servicios';
import { ContactoComponent } from './components/pages/contacto/contacto';
import { RecomendacionesComponent } from './components/pages/recomendaciones/recomendaciones';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'recomendaciones', component: RecomendacionesComponent },
  { path: '**', redirectTo: '' }
];
