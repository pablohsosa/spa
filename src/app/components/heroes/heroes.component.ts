import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../servicios/heroes.service';
import { HeroeInterface } from '../../interfaces/heroe';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: HeroeInterface[] = [];

  constructor(public heroesServices: HeroesService) { }

  ngOnInit() {

    this.heroes = this.heroesServices.getHeroes();
    console.log(this.heroes);
  }

}
