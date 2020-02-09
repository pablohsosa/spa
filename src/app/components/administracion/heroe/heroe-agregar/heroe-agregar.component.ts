import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { HeroesService } from '../../../../servicios/heroes.service';
import { HeroeInterface } from '../../../../interfaces/heroe';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-heroe-agregar',
  templateUrl: './heroe-agregar.component.html',
  styleUrls: ['./heroe-agregar.component.css']
})
export class HeroeAgregarComponent implements OnInit {

  form: FormGroup;
  mensajeOk: boolean = false;
  mensajeError: boolean = false;
  mensaje: string;
  error:string;

  constructor(private formBuilder: FormBuilder,
              private heroesService: HeroesService) {

    this.form = this.formBuilder.group({
      idx: ['', []],
      nombre: ['', [Validators.required]],
      bio: ['', [Validators.required]],
      img: ['', [Validators.required]],
      aparicion: ['', [Validators.required]],
      casa: ['', [Validators.required]]
    });
  }

  ngOnInit() {
  }

  registrar(event: Event) {
    event.preventDefault();

    if (this.form.valid) {

      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Se registró exitosamente',
        showConfirmButton: false,
        timer: 1500
      })

      const value = this.form.value;
      this.heroesService.postHeroe(value)
        .subscribe(
          (datos) => {
          },
          (err) => {

            this.mensajeError = true;
            this.mensaje = err;
            Swal.fire({
              icon: 'error',
              title: 'Error al registrar',
              text: err
            }
            );
          }
        );
      this.resetear();
    } else {
      this.form.markAllAsTouched();
    }
  }

  resetear() {
    this.form.patchValue({
      nombre: '',
      bio: '',
      img: '',
      aparicion: '',
      casa: ''
    });

  }

}
