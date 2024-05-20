import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AngeloComponent } from './angelo/angelo.component';
import { HomeComponent } from './home/home.component';
import { EsteticaComponent } from './estetica/estetica.component';
import { EsercUnoComponent } from './eserc-uno/eserc-uno.component';
import { EsercDueComponent } from './eserc-due/eserc-due.component';
import { EsercitazioneComponent } from './esercitazione/esercitazione.component';
import { ProfiloPersonaleComponent } from './profilo-personale/profilo-personale.component';
import { ContattoComponent } from './contatto/contatto.component';
import { WhoComponent } from './who/who.component';

const routes: Routes = [
  {path: '', component: ProfiloPersonaleComponent},
  {path: 'home', component: HomeComponent},
  {path: 'angelo', component: AngeloComponent},
  {path: 'estetica', component: EsteticaComponent},
  {path: 'esercUno', component: EsercUnoComponent},
  {path: 'esercDue', component: EsercDueComponent},
  {path: 'esercitazione', component: EsercitazioneComponent},
  {path: 'contatto', component: ContattoComponent},
  {path: 'about', component: WhoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
