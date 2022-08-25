import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-newpersona',
  templateUrl: './newpersona.component.html',
  styleUrls: ['./newpersona.component.css']
})
export class NewpersonaComponent implements OnInit {
  nombre: string;
  apellido: string;
  img: string;
  acercaDe: string;

  constructor(private personaS: PersonaService, private router: Router, private location: Location) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const persona = new Persona(this.nombre, this.apellido,this.img, this.acercaDe);
    this.personaS.save(persona).subscribe(
      data =>{
        alert("Persona añadida correctamente");
        this.router.navigate(['']);
      }, err =>{
        alert("falló");
        this.router.navigate(['']);
      }
    )
  }
  cancel() {
    this.location.back();
  }
}
