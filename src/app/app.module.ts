import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//rutas IMPORTADAS
//------------------------------------------
import { APP_ROUTING } from './app.routes';
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { JamesComponent } from './components/james/james.component';
import { MesiiComponent } from './components/mesii/mesii.component';
import { MessiComponent } from './components/messi/messi.component';
import { RonaldoComponent } from './components/ronaldo/ronaldo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    JamesComponent,
    MesiiComponent,
    MessiComponent,
    RonaldoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING //<<<<<<<<<<<--------- importando el modulo 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
