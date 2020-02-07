import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-registrar-heroe',
  templateUrl: './registrar-heroe.component.html',
  styleUrls: ['./registrar-heroe.component.css']
})
export class RegistrarHeroeComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      nombre: ['', [Validators.required]],
      bio: ['', [Validators.required]],
      img: ['', [Validators.required]],
      aparicion: ['', [Validators.required]],
      casa: ['', [Validators.required]],
      idx: ['', [Validators.required]],
    });

   /*  this.form.valueChanges
      .pipe(
        debounceTime(600)
      )
      .subscribe(value => {
        console.log(value);
      }); */
  }


  ngOnInit() {
  }

  guardar(event: Event) {
    event.preventDefault();

    if (this.form.valid) {
      const value = this.form.value;
      console.log(value);
    } else {
      this.form.markAllAsTouched();
    }
  }

}
