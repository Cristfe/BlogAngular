import { Injectable } from '@angular/core';
import { POSTS } from './db/post.db'
import { Post } from './models/Post.model';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  arrPost: Post[];

  constructor() {
  }

  getAllPosts(): Promise<Post[]> {
    return new Promise((resolve, reject) => {
      resolve(POSTS);
    });
  }


  getPostByCategoria(): Promise<Post[]> {
    return Promise.resolve(this.arrPost.filter(post => post.categoria));
  }

  add(pPost): Promise<Post[]> {
    return new Promise((resolve, reject) => {
      pPost.id = POSTS.length + 1;
      POSTS.push(pPost);
      resolve(POSTS);
    });
  }

}
