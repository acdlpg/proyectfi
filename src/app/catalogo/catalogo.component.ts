import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Pelicula, PeliculasService } from '../services/peliculas.service';
import { Router } from '@angular/router';
import { AccService } from '../shared/acc.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css'],
})
export class CatalogoComponent implements OnInit {
  peliculas: Pelicula[];
  @Output() datosPelicula = new EventEmitter<Pelicula>();

  private parrafo: SpeechSynthesisUtterance;
  leerElementosBoolean: boolean = false;

  constructor(
    public servicio: PeliculasService,
    private router: Router,
    public accService: AccService
  ) {
    this.peliculas = this.servicio.getMovies();
    this.parrafo = new SpeechSynthesisUtterance();
  }

  ngOnInit(): void {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });

    this.accService.leerContenido.subscribe(() => {
      this.leerElementosBoolean = true;
      console.log(
        'Leer Elementos Boolean Componente: ' + this.leerElementosBoolean
      );
    });

    this.accService.leerContenido2.subscribe(() => {
      this.leerElementosBoolean = false;
      console.log(
        'Leer Elementos Boolean Componente: ' + this.leerElementosBoolean
      );
    });

    this.accService.resumirContenido.subscribe(() => {
      this.reanudarVoz();
    });

    this.accService.pausarContenido.subscribe(() => {
      this.pausarVoz();
    });

    this.accService.cancelarContenido.subscribe(() => {
      this.cancelarVoz();
    });
  }

  leerTexto1(event: MouseEvent): void {
    if (this.leerElementosBoolean) {
      const contenido = (event.target as HTMLElement).textContent;
      if (contenido) {
        this.parrafo.text = contenido;
        speechSynthesis.speak(this.parrafo);
      }
    }
  }
  cancelarVoz(): any {
    if ('speechSynthesis' in window) {
      speechSynthesis.cancel();
    }
  }

  pausarVoz(): void {
    if ('speechSynthesis' in window) {
      speechSynthesis.pause();
    }
  }

  reanudarVoz(): void {
    if ('speechSynthesis' in window) {
      speechSynthesis.resume();
    }
  }

  enviarDatos(pelicula: Pelicula, event: any) {
    event.preventDefault();
    this.datosPelicula.emit(pelicula);
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
}
