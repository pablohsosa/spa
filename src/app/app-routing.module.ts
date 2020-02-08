import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { AuthGuard } from '././guardias/auth.guard';
import { PerfilComponent } from './components/personas/perfil/perfil.component';
import { AdministracionComponent } from './components/administracion/administracion.component';
import { HeroeAgregarComponent } from './components/administracion/heroe/heroe-agregar/heroe-agregar.component';


const rutas: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'heroes', component: HeroesComponent},
  { path: 'heroe/:id', component: HeroeComponent },
  { path: 'buscar/:termino', component: BuscadorComponent },
  { path: 'admin', component: AdministracionComponent},
  { path: 'admin/heroe/registrar', component: HeroeAgregarComponent},
  { path: 'perfil', component: PerfilComponent, canActivate: [AuthGuard] },
  { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(rutas)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
