import { Component, OnInit } from '@angular/core';
import { ServicioService } from './../servicio.service';
import { Post } from './../models/Post.model'



@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  Blog: Post[] = [];

  constructor(private servicioService: ServicioService) { }

  ngOnInit(): void {
    this.servicioService.getAllPosts()
      .then(arrPost => {
        this.Blog = arrPost;
      }).catch(err => console.log(err));
  }


  getPosts() {
    this.servicioService.getAllPosts()

  }

}
