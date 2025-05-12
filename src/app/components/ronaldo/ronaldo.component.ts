import { Component, OnInit } from '@angular/core';
import { RonaldoService,Ronaldo } from 'src/app/services/ronaldo.service';

@Component({
  selector: 'app-ronaldo',
  templateUrl: './ronaldo.component.html',
  styleUrls: ['./ronaldo.component.css']
})
export class RonaldoComponent implements OnInit {

    ronaldo : Ronaldo[]=[];
  

  constructor(private _ronaldoService : RonaldoService) { }

  ngOnInit(): void {

    this.ronaldo=this._ronaldoService.getJugador();
console.log(this.ronaldo);

  }

}
