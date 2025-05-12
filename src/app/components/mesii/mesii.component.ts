import { Component, OnInit } from '@angular/core';
import { MessiService,Messi } from 'src/app/services/messi.service';

@Component({
  selector: 'app-mesii',
  templateUrl: './mesii.component.html',
  styleUrls: ['./mesii.component.css']
})
export class MesiiComponent implements OnInit {

    messi : Messi[]=[];
  

  constructor(private _messiService : MessiService) { }

  ngOnInit(): void {
    this.messi=this._messiService.getJugador();
console.log(this.messi);
  }

}
