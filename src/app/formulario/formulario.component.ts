import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormsModule } from '@angular/forms';

import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      titulo: new FormControl('', [
        Validators.required,
        Validators.maxLength(30)
      ]),
      texto: new FormControl('', [
        Validators.required,
        Validators.maxLength(150)
      ]),
      autor: new FormControl('', [
        Validators.required,
        Validators.maxLength(30)
      ]),
      imagen: new FormControl('', [
        Validators.required,
      ]),
      fecha: new FormControl('', [
        Validators.required
      ]),
      categoria: new FormControl('', [
        Validators.required
      ])
    })

  }

  ngOnInit(): void {
    const controlTitulo = this.form.controls.titulo;
    controlTitulo.valueChanges.pipe(debounceTime(500)).subscribe(value => {
      console.log(value);
    })
  }

  onSubmit() {
    console.log(this.form.value);
  }


}
