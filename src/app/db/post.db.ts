import { Post } from '../models/Post.model';

export const POSTS: Post[] = [
    {
        titulo: 'Un canario en Madrid',
        texto: 'Soy un canario en Madrid',
        autor: 'Cristian Herrera',
        imagen: null,
        fecha: 2020,
        categoria: 'realidad',
    },
    {
        titulo: 'Conspiraciones',
        texto: 'Todo lo que está pasando es una conspiración liderada por el Joker',
        autor: 'Mister J',
        imagen: 'https://www.elindependiente.com/wp-content/uploads/2019/10/joker-2019-joaquin-phoenix-clown-5c-1436x808.jpg',
        fecha: 2020,
        categoria: 'conspiracion',
    },
]