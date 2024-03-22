import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AngeloComponent } from './angelo/angelo.component';
import { HomeComponent } from './home/home.component';
import { EsteticaComponent } from './estetica/estetica.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'angelo', component: AngeloComponent},
  {path: 'estetica', component: EsteticaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
