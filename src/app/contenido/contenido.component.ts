import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../services/peliculas.service';
import { ActivatedRoute, Params, Router, Scroll } from '@angular/router';
import { RutaService } from '../services/ruta.service';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css'],
})
export class ContenidoComponent implements OnInit {
  datosPelicula: Pelicula = {
    nombre: '',
    sinopsis: '',
    img: '',
    year: 0,
    duracion: 0,
    director: '',
    collapse: 0,
    trailer: '',
    generos: [],
  };
  isCatalogoVisible = true;
  isCompraVisible = false;
  ruta = 0;

  peliculaCompra(pelicula: Pelicula) {
    this.datosPelicula = pelicula;
    this.isCatalogoVisible = false;
    this.isCompraVisible = true;
  }

  ngOnInit(): void {
    this.rutaActiva.params.subscribe((params: Params) => {
      if (Object.keys(params).length == 0) {
        this.isCatalogoVisible = true;
        this.isCompraVisible = false;
      } else {
        if (parseInt(params['movie']) == 0) {
          this.router.navigate(['/contenido']);
          this.isCatalogoVisible = true;
          this.isCompraVisible = false;
        } else {
          this.isCatalogoVisible = false;
          this.isCompraVisible = true;
        }
      }
    });
  }

  regresar() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    this.isCatalogoVisible = true;
    this.isCompraVisible = false;
    this.router.navigateByUrl('/contenido');
  }

  constructor(private router: Router, private rutaActiva: ActivatedRoute) {}
}
