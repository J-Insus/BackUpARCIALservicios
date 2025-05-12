import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})


export class RonaldoService {

private ronaldo:Ronaldo[]= [
    
    {
        nombre: "Cristiano Ronaldo",
        bio: "futbolista portugués que juega como delantero en el Manchester United Football Club de la Premier League de Inglaterra y en la selección de Portugal, de la cual es su capitán y máximo goleador histórico",
        img: "assets/img/ronaldo.jpg",
        nacimiento: "5 de febrero de 1985",
        seleccion:"Portugal",
        equipo:"Manchester UNITED"
    }
];

constructor(){
console.log("Servicio listo para usar!!");
}
getJugador():Ronaldo[]{
return this.ronaldo;
}
}

export interface Ronaldo{
    nombre: string;
    bio: string;
    img: string;
    nacimiento: string;
    seleccion : string;
    equipo:string;
}

