import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hyss } from 'src/app/model/hyss';
import { HyssService } from 'src/app/service/hyss.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edithyss',
  templateUrl: './edithyss.component.html',
  styleUrls: ['./edithyss.component.css']
})
export class EdithyssComponent implements OnInit {
  hardsoft: Hyss = null;
  
  constructor(
    private hyssS: HyssService,
    private activatedRouter : ActivatedRoute,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.hyssS.detail(id).subscribe(
      data =>{
        this.hardsoft = data;
      }, err =>{
         alert("Error al modificar");
         this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.hyssS.update(id, this.hardsoft).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar la hard o soft skills");
        this.router.navigate(['']);
      }
    )
  }
  cancel() {
    this.location.back();
  }
}
