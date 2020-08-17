import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { ServicioService } from './../servicio.service';
import { Post } from './../models/Post.model'


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  Posts: Post[];

  constructor(private servicioService: ServicioService) { }

  ngOnInit(): void {
  }

  onSubmit(formValues) {
    console.log(formValues);
    const nuevoPost = new Post('', '', '', '', '', '');
    this.servicioService.add(nuevoPost)
      .then(arrPosts => {
        this.Posts = arrPosts;
      })
      .catch(error => console.log(error));
  }

}