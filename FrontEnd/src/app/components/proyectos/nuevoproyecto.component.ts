import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ProyectosService } from 'src/app/service/proyectos.service';
import { Proyectos } from 'src/app/model/proyectos';

@Component({
  selector: 'app-nuevoproyecto',
  templateUrl: './nuevoproyecto.component.html',
  styleUrls: ['./nuevoproyecto.component.css']
})
export class NewproyectoComponent implements OnInit {
  nombreE: string = '';
  descripcionE: string = '';
  urlP: string = '';

  constructor(private sProyectos: ProyectosService, private router: Router, private location: Location) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const expe = new Proyectos (this.nombreE, this.descripcionE, this.urlP);
    this.sProyectos.save(expe).subscribe(
      data => {
        alert("Proyecto añadido");
        this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }
  cancel() {
    this.location.back();
  }

}
