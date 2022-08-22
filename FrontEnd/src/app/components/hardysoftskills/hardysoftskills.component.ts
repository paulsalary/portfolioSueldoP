import { Component, OnInit } from '@angular/core';
import { Hyss } from 'src/app/model/hyss';
import { HyssService } from 'src/app/service/hyss.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-hardysoftskills',
  templateUrl: './hardysoftskills.component.html',
  styleUrls: ['./hardysoftskills.component.css']
})
export class HyssComponent implements OnInit {
  hardsoft: Hyss[] = [];

  constructor(private hyssS: HyssService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarHyss();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarHyss(): void {
    this.hyssS.lista().subscribe(data => { this.hardsoft = data; })
  }

  delete(id?: number){
    if(id != undefined){
      this.hyssS.delete(id).subscribe(
        data => {
          this.cargarHyss();
        }, err => {
          alert("No se pudo borrar la hard o soft skill");
        }
      )
    }
  }
}

