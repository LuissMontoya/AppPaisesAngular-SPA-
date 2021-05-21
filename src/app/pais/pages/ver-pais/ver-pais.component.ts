import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap, tap } from 'rxjs/operators';

import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [],
})
export class VerPaisComponent implements OnInit {

  pais!: Country; //pais puede ser Null

  constructor(
    private activateRoute: ActivatedRoute,
    private PaisService: PaisService
  ) {}

  ngOnInit(): void {
    this.activateRoute.params
      .pipe(
        switchMap(({ id }) => this.PaisService.getPaisPorCodigo( id )),
        tap( console.log ) //segundo plano
      )
      .subscribe(pais => this.pais = pais);

    /* this.activateRoute.params.subscribe(({ id }) => {
      console.log(id);

      this.PaisService.getPaisPorCodigo(id).subscribe((pais) => {
        console.log(pais);
      });
    });
 */
  }
}
