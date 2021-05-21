import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
      button {
        margin-right: 5px;
      }
    `,
  ],
})
export class PorRegionComponent {
  regiones: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  regionActiva: string = '';
  paises: Country[] = [];
  hayError: boolean = false;

  constructor(private PaisService: PaisService) {}

  getClasCss(region: string): string {
    return region === this.regionActiva
      ? 'btn btn-primary'
      : 'btn-outline-primary';
  }

  activarRegion(region: string) {

    if (region === this.regionActiva){
      return; // no volver a cargar la misma Región!.
    }

    this.regionActiva = region;
    this.paises = [];
    
    this.PaisService.buscarRegion(region).subscribe((paises) => {
      console.log(paises);
      this.paises = paises;
    });
  }
}
