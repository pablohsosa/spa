import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';
import { HeroeInterface } from '../../interfaces/heroe';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  heroes: HeroeInterface [] = [];
  termino: string;
  constructor( private activatedRoute: ActivatedRoute, private _heroesService: HeroesService) {

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      console.log(params.termino);
      this.termino = params.termino;
      this.heroes = this._heroesService.buscarHeroes(params['termino']);
      console.log(this.heroes);
    });
  }

}
