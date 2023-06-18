import { Component, Input, OnInit } from '@angular/core';
import { AccService } from '../shared/acc.service';

declare const speechSynthesis: any;

@Component({
  selector: 'app-sobre-nosotros',
  templateUrl: './sobre-nosotros.component.html',
  styleUrls: ['./sobre-nosotros.component.css'],
})
export class SobreNosotrosComponent implements OnInit {
  private parrafo: SpeechSynthesisUtterance;
  leerElementosBoolean: boolean = false;

  video ='2s4v46RPNaQ';

   mensajeHi: string="";

  constructor(public accService: AccService) {
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

  onMensajeHij(mensaje:any){
    this.mensajeHi=mensaje;
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
  /*
  leerElementosHTML(): void {
    const elementosTexto = Array.from(
      document.querySelectorAll('h1, h3, p, .p-card')
    )
      .filter((elemento) => {
        const texto = elemento.textContent?.trim();
        return texto !== '';
      })
      .map((elemento) => elemento.textContent?.trim());

    this.textoHTML = elementosTexto.join('. ');
  }
  */
  /*
  leerContenidoCommponente(): void {
    this.parrafo.text = this.textoHTML;
    speechSynthesis.speak(this.parrafo);
  }
*/
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
