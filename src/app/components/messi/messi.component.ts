import { Component, OnInit } from '@angular/core';
import { MessiService,Messi } from 'src/app/services/messi.service';


@Component({
  selector: 'app-messi',
  templateUrl: './messi.component.html',
  styleUrls: ['./messi.component.css']
})
export class MessiComponent implements OnInit {
  messi : Messi[]=[];

  constructor(private _messiService : MessiService) { }

  ngOnInit(): void {
    this.messi=this._messiService.getJugador();
console.log(this.messi);
  }

}
