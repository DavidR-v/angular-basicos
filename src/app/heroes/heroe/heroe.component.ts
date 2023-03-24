import { Component } from '@angular/core';


@Component({ 
selector: 'app-heroe', 
templateUrl: 'heroe.component.html'

})


export class HeroeComponent{

    nombre: string = 'Black Panther';
    edad  : number = 35;

    get nombreCapitalizado(): string {
        return this.nombre.toUpperCase();
    }

    obteberNombre(): string {
        return `${ this.nombre} - ${this.edad}`;
    }

    cambiarNombre(): void{ this.nombre = 'StaticShock';}

    cambiarEdad(): void{ this.edad = 30;}
}
