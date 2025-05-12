import { Component, OnInit } from '@angular/core';
import { JamesService,James } from 'src/app/services/james.service';

@Component({
  selector: 'app-james',
  templateUrl: './james.component.html',
  styleUrls: ['./james.component.css']
})
export class JamesComponent implements OnInit {

  james : James[]=[];

  constructor(private _jamesService : JamesService) { }

  ngOnInit(): void {
    this.james=this._jamesService.getJugador();
console.log(this.james);


  }

}
