import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AccService } from '../shared/acc.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css'],
})
export class APIComponent implements OnInit {

  video='';
  mensajee:string="";

  private parrafo: SpeechSynthesisUtterance;
  leerElementosBoolean: boolean = false;

  url = 'https://www.omdbapi.com/?i=';
  key = '&apikey=60ce6a4c';
  httpData: any;
  array: any[] = [];
  ids: string[] = [
    'tt0110912',
    'tt0109830',
    'tt0133093',
    'tt0137523',
    'tt0120338',
    'tt0110357',
    'tt1375666',
    'tt0117951',
    'tt0111161',
    'tt0068646',
    'tt0468569',
    'tt0071562',
    'tt0108052',
    'tt0120737',
    'tt0167261',
    'tt0167260',
    'tt0080684',
    'tt0047478',
    'tt0317248',
    'tt0816692',
    'tt6751668',
  ];
  columns: string[] = [
    'Título',
    'Año',
    'Duración',
    'Género',
    'Director',
    'Actores',
  ];
  prueba = '';

  

  constructor(private httpclient: HttpClient, public accService: AccService) {
    for (let i of this.ids) {
      this.httpclient.get(this.url + i + this.key).subscribe((data) => {
        this.httpData = data;
        this.array.push(this.httpData);
      });
    }
    console.log(this.array);
    this.parrafo = new SpeechSynthesisUtterance();
  }
  ngOnInit(): void {
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

  leerTexto2(event: MouseEvent): void {
    if (this.leerElementosBoolean) {
      const contenido = (event.target as HTMLElement).textContent;
      if (contenido) {
        const elementos = contenido.split('\n'); // Separar por saltos de línea si es necesario

        // Recorrer los elementos y agregar una pausa entre cada uno
        elementos.forEach((elemento, index) => {
          setTimeout(() => {
            this.parrafo.text = elemento;
            speechSynthesis.speak(this.parrafo);
          }, index * 3000); // Multiplicar por 1000 para obtener segundos (1 segundo de pausa)
        });
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


}

