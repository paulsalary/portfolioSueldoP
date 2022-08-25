import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { EditeducacionComponent } from './components/educacion/editeducacion.component';
import { EditProyectoComponent } from './components/proyectos/editproyecto.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { NeweducacionComponent } from './components/educacion/neweducacion.component';
import { NewproyectoComponent } from './components/proyectos/nuevoproyecto.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EdithyssComponent } from './components/hardysoftskills/edithyss.component';
import { NewhyssComponent } from './components/hardysoftskills/newhyss.component';
import { NewpersonaComponent } from './components/acerca-de/newpersona.component';
import { EditpersonaComponent } from './components/acerca-de/editpersona.component';

const routes: Routes = [
  {path:'',component : HomeComponent},
  {path:'login',component : LoginComponent},
  {path:'nuevaexp', component: NewExperienciaComponent},
  {path:'editexp/:id', component: EditExperienciaComponent},
  {path:'nuevaedu', component: NeweducacionComponent},
  {path:'editedu/:id', component: EditeducacionComponent},
  {path:'nuevoproyecto', component: NewproyectoComponent},
  {path:'editproyecto/:id', component: EditProyectoComponent},
  {path:'nuevahyss', component: NewhyssComponent},
  {path:'edithyss/:id', component: EdithyssComponent},
  {path: 'nuevapersona', component: NewpersonaComponent},
  {path: 'editpersona/:id', component: EditpersonaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
