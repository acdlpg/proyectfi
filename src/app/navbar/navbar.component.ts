import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { RutaService } from '../services/ruta.service';
import { NavigationEnd, Router } from '@angular/router';
import { Pelicula, PeliculasService } from '../services/peliculas.service';
import Swal from 'sweetalert2';
import { AccService } from '../shared/acc.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  //Accesibilidad
  private parrafo: SpeechSynthesisUtterance;
  leerElementosBoolean: boolean = false;

  nombre: string = '';
  ruta: string = '';
  peliculas: Pelicula[];
  color = '#121212';
  search = false;
  dataUser!: any;
  adminUID = '5ONTPL5AACSW3OnubQDt1f0MUxz1';
  adminLogin: boolean;
  constructor(
    private router: Router,
    private rutaService: RutaService,
    private peliculasService: PeliculasService,
    public accService: AccService,
    private afAuth: AngularFireAuth,
    private session: SessionService
  ) {
    this.peliculas = this.peliculasService.getMovies();
    this.parrafo = new SpeechSynthesisUtterance();
    this.adminLogin = false;
  }

  ngOnInit() {
    //this.dataUser = this.session.getUser();
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.afAuth.currentUser.then((user) => {
          if (this.session.getUser()) {
            this.dataUser = user;
            console.log(user);
            if(this.dataUser.uid === this.adminUID) {
              this.adminLogin = true;
            }
            else {
              this.adminLogin = false;
            }
          }
          else {
            this.dataUser = null;
          }
        });
        console.log(this.dataUser);
      }
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

  enrutar(): void {
    this.nombre = this.nombre.toLowerCase();
    this.rutaService.setSharedData(this.nombre);
    for (let pelicula of this.peliculas) {
      if (this.nombre === pelicula.nombre.toLowerCase()) {
        this.search = true;
      }
    }
    if (!this.search) {
      Swal.fire({
        icon: 'error',
        title: '¡Lo sentimos!',
        text: 'La película no fue encontrada',
      });
    }
    for (let pelicula of this.peliculas) {
      if (this.nombre === pelicula.nombre.toLowerCase()) {
        this.ruta = pelicula.collapse.toString();
        this.router.navigate(['/contenido', this.ruta]);
        this.nombre = '';
        window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth',
        });
        this.search = false;
      }
    }
  }
  alternarSesion() {
    if (this.dataUser) {
      console.log('Cerrando sesion');
      this.afAuth.signOut().then(() => this.router.navigate(['/inicio']));
      this.dataUser = null;
      this.session.setUser(null);
    } else {
      console.log('Iniciando sesion');
      this.router.navigate(['/login']);
    }
  }
}
