import { Injectable } from '@angular/core';
import { Post } from './models/Post.model'

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  arrPost: Post[];

  constructor() {
    this.arrPost = [
      new Post('Lorem', 'Lorem', 'Cris Herrera', null, '10 / 08 / 2017', 'conspiracion'),
      new Post('Canario en Madrid', 'Soy un canario en Madrid', 'Cristian Herrera', null, '01 / 07 / 2020', 'Realidad')
    ]
  }

  agregarPost(Post) {
    return this.arrPost, Post
  }

  getAllPosts(): Post[] {
    return this.arrPost;
  }

  getAllPromise(): Promise<Post[]> {
    return new Promise((resolve, reject) => {
      resolve(this.arrPost);
    });
  }

  getPostByCategoria(): Promise<Post[]> {
    return Promise.resolve(this.arrPost.filter(post => post.categoria));
  }

}
