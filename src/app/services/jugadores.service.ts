import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class JugadoresService {

    private jugadores : Jugadores [] = [

        {
            nombre: "Aquaman",
            bio: "El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vi da marina, la cual puede convocar a grandes distancias.",
            img: "assets/img/aquaman.png",
            aparicion: "1941-11-01",
            casa:"DC"
        }
    ]


    constructor() {  
        console.log("Servicio Listo para usar")
    }
    
    getJugadores(): Jugadores []{
        return this.jugadores
    }
}

export interface Jugadores{
    nombre: string;
    bio: string;
    img: string;
    aparicion: string;
    casa: string;
    }
    
