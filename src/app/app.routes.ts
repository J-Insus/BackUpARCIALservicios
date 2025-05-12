import { RouterModule, Routes } from "@angular/router";

//ESTAS SON LAS RUTAS QUE SE VAN A CONFIGURAR Y SE IMPORTARON
import { HomeComponent } from './components/home/home.component';
import { JamesComponent } from "./components/james/james.component";
import { MessiComponent } from "./components/messi/messi.component";
import { RonaldoComponent } from "./components/ronaldo/ronaldo.component";


const APP_ROUTES:Routes=[

{path: 'home', component: HomeComponent }, //Se define el Home
{path: 'james', component: JamesComponent},
{path: 'messi', component: MessiComponent},
{path: 'ronaldo', component: RonaldoComponent},
{path: '**', pathMatch: 'full',redirectTo:'home'}, //nn = home
];
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);  