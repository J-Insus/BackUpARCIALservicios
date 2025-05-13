import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//rutas IMPORTADAS
//------------------------------------------
import { APP_ROUTING } from './app.routes';
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

//servicios

import { JamesService } from './services/james.service';
import { MessiService } from './services/messi.service';
import { RonaldoService } from './services/ronaldo.service';
import { JugadoresService } from './services/jugadores.service';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { JamesComponent } from './components/james/james.component';
import { MesiiComponent } from './components/mesii/mesii.component';
import { MessiComponent } from './components/messi/messi.component';
import { RonaldoComponent } from './components/ronaldo/ronaldo.component';
import { JugadoresComponent } from './components/jugadores/jugadores.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    JamesComponent,
    MesiiComponent,
    MessiComponent,
    RonaldoComponent,
    JugadoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING //<<<<<<<<<<<--------- importando el modulo 
  ],
  providers: [

      JamesService,
      MessiService,
      RonaldoService,
      JugadoresService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
