import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-heroe-agregar',
  templateUrl: './heroe-agregar.component.html',
  styleUrls: ['./heroe-agregar.component.css']
})
export class HeroeAgregarComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {

    this.form = this.formBuilder.group({
      idx: ['',  [Validators.required]],
      nombre: ['', [Validators.required]],
      bio: ['', [Validators.required]],
      img: ['', [Validators.required]],
      aparicion: ['', [Validators.required]],
      casa: ['', [Validators.required]]
    });


  }

  ngOnInit() {
  }

}
