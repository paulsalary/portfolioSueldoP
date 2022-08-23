import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hyss } from 'src/app/model/hyss';
import { HyssService } from 'src/app/service/hyss.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-newhyss',
  templateUrl: './newhyss.component.html',
  styleUrls: ['./newhyss.component.css']
})
export class NewhyssComponent implements OnInit {
  nombreH: string;
  descripcionE: string;
  iconoH: string;

  constructor(private hyssS: HyssService, private router: Router, private location: Location) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const educacion = new Hyss(this.nombreH, this.descripcionE, this.iconoH);
    this.hyssS.save(educacion).subscribe(
      data =>{
        alert("Educacion añadida correctamente");
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