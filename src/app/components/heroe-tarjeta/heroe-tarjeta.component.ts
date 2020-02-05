import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HeroeInterface } from '../../interfaces/heroe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe: HeroeInterface [] = [];
  @Input() indice: number;

  // @Output() heroeSeleccionado: EventEmitter<number>;

  constructor( private route: Router) {
    // this.heroeSeleccionado = new EventEmitter ();
  }

  ngOnInit() {
  }

  verHeroe(){
    console.log(this.indice);
    this.route.navigate(['/heroe',this.indice]);
    // this.heroeSeleccionado.emit( this.indice );
  }

}
