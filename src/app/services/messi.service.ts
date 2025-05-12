import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})


export class MessiService {

private messi:Messi[]= [
    
    {
        nombre: "Leonel Messi",
        bio: "futbolista argentino que juega como delantero o centrocampista en el Paris Saint-Germain de la Ligue 1 de Francia, Es internacional con la selección de Argentina, equipo del que es capitán y máximo goleador histórico.",
        img: "assets/img/messi.jpg",
        nacimiento: " 24 de junio de 1987",
        seleccion:"Argentina",
        equipo:"PSG"
    }
];

constructor(){
console.log("Servicio listo para usar!!");
}
getJugador():Messi[]{
return this.messi;
}
}

export interface Messi{
    nombre: string;
    bio: string;
    img: string;
    nacimiento: string;
    seleccion : string;
    equipo:string;
}

