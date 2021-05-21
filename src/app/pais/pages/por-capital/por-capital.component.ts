import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  constructor(private PaisService: PaisService) { }

  termino: string = 'Hola Mundo';
  hayError: boolean = false;
  capital : Country[]=[];

  buscar(termino: string) {
    this.hayError = false;
    this.termino = termino;
    this.PaisService.buscarCapital(this.termino).subscribe(
      (capital) => {
        this.capital = capital;
      },
      (err) => {
        this.hayError = true;
        this.capital= [];
      }
    );
  }


  
  sugerencias(termino: string){
    this.hayError = false;
    
     
  }

 
}
