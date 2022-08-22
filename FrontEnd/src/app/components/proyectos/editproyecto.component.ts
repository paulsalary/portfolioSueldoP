import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ProyectosService } from 'src/app/service/proyectos.service';
import { Proyectos } from 'src/app/model/proyectos';

@Component({
  selector: 'app-editproyecto',
  templateUrl: './editproyecto.component.html',
  styleUrls: ['./editproyecto.component.css']
})
export class EditProyectoComponent implements OnInit {
  proyectos: Proyectos = null;

  constructor(private sProyectos: ProyectosService, private activatedRouter: ActivatedRoute,
    private router: Router, private location: Location) { }

    ngOnInit(): void {
      const id = this.activatedRouter.snapshot.params['id'];
      this.sProyectos.detail(id).subscribe(
        data =>{
          this.proyectos = data;
        }, err =>{
          alert("Error al modificar proyecto");
          this.router.navigate(['']);
        }
      )
    }

    onUpdate(): void{
      const id = this.activatedRouter.snapshot.params['id'];
      this.sProyectos.update(id, this.proyectos).subscribe(
        data => {
          this.router.navigate(['']);
        }, err =>{
           alert("Error al modificar proyecto");
           this.router.navigate(['']);
        }
      )
    }
    cancel() {
      this.location.back();
    }

}
