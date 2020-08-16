export class Post {
    titulo: string;
    texto: string;
    autor: string;
    imagen: URL;
    fecha: Date;
    categoria: string;

    constructor(pTitulo, pTexto, pAutor, pImagen, pFecha, pCategoria) {
        this.titulo = pTitulo;
        this.texto = pTexto;
        this.autor = pAutor;
        this.imagen = pImagen;
        this.fecha = pFecha;
        this.categoria = pCategoria;
    }
}