import { Component } from '@angular/core';


@Component({ 
    selector: 'app-listado', 
    templateUrl: 'listado.component.html'
    
    })

    export class ListadoComponent{

        heroes: string[] = ['StaticShock', 'BlackPanther', 'ShakaZulu', 'ElMarciano'];
        heroeBorrado: string = '';


        borrarHeroe() {
            this.heroeBorrado = this.heroes.shift() || '';
      
        
        }

    }
    

