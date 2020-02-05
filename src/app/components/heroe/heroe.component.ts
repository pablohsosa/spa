import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroeInterface } from '../../interfaces/heroe';
import { HeroesService } from '../../servicios/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe: HeroeInterface = {nombre:'', bio:'', img:'', aparicion:'', casa:''};

  constructor( private rutactiva: ActivatedRoute, private heroesService: HeroesService) { }

  ngOnInit() {
    this.rutactiva.params.subscribe(parametros => {
      console.log(parametros);
      this.heroe = this.heroesService.getHeroe(parametros.id);
      console.log(this.heroe);
    }
    );
  }

}
