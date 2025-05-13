import { Component, OnInit } from '@angular/core';
import { JugadoresService, Jugadores } from 'src/app/services/jugadores.service'; //SE IMPORTA LA INTERFACE =  Jugadores

@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.css']
})
export class JugadoresComponent implements OnInit {
    
  jugadores : Jugadores[]=[]; //Se crea un arreglo dentro de la clase 
  

  constructor(private _jugadoresService : JugadoresService) { }

  ngOnInit(): void {
    this.jugadores=this._jugadoresService.getJugadores(); //SE UTILIZA EL ARREGLO 
console.log(this.jugadores);


  }

}
