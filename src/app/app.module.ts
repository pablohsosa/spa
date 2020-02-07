import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AboutComponent } from './components/about/about.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';
import { PerfilComponent } from './components/personas/perfil/perfil.component';
import { AdministracionComponent } from './components/administracion/administracion.component';
import { HeroeAgregarComponent } from './components/administracion/heroe/heroe-agregar/heroe-agregar.component';

import { AuthService } from './servicios/auth.service';
import { AuthGuard } from './guardias/auth.guard';
import { HeroesService } from './servicios/heroes.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HeroesComponent,
    AboutComponent,
    HeroeComponent,
    BuscadorComponent,
    HeroeTarjetaComponent,
    PerfilComponent,
    AdministracionComponent,
    HeroeAgregarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ HeroesService,
              AuthService,
              AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
