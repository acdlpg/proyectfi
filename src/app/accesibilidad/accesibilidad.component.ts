import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AccService } from '../shared/acc.service';

@Component({
  selector: 'app-accesibilidad',
  templateUrl: './accesibilidad.component.html',
  styleUrls: ['./accesibilidad.component.css'],
})
export class AccesibilidadComponent implements OnInit {

//Lector 
  private parrafo: SpeechSynthesisUtterance;
  lectorActivado: string = "Lector de Pantalla Activado";
  lectorDesactivado: string = "Lector de Pantalla Desactivado"

  //Botones principales
  botonPresionado1: boolean = false;
  botonPresionado2: boolean = false;
  botonPresionado3: boolean = false;
  botonPresionado4: boolean = false;

  //Reaundar, pausar y cancelar
  botonPresionado5: boolean = false;
  botonPresionado6: boolean = false;
  botonPresionado7: boolean = false;

  //Boolean
  lectorPantalla: boolean = false;

  constructor(public accService: AccService) {
    this.parrafo = new SpeechSynthesisUtterance();
  }

  ngOnInit(): void {
    this.accService.leerContenido.subscribe(() => {
      console.log('Lector Emitido');
    });
  }

  //Toggles
  /*
  toggleLectorPantalla(): void {
    this.lectorPantalla = !this.lectorPantalla;
    this.botonPresionado1 = !this.botonPresionado1;
    console.log("Boton Lector Boolean Acc: " + this.botonPresionado1)
    console.log("Boolean Lector Acc : " + this.lectorPantalla)
    //this.accService.setPoderLeer(this.leerBotonBoolean);
  }
*/
  

  //Toggles

  resumirLector1(): void {
    this.accService.resumirContenido.emit();
  }
  pausarLector1(): void {
    this.accService.pausarContenido.emit();
  }

  cancelarLector1(): void {
    this.accService.cancelarContenido.emit();
   // this.botonPresionado1 = !this.botonPresionado1;
    //this.lectorPantalla = !this.lectorPantalla;
  }


  leerTexto1(): void {

    this.lectorPantalla = !this.lectorPantalla;
    this.botonPresionado1 = !this.botonPresionado1;

    console.log("Boton Lector Boolean Acc: " + this.botonPresionado1)
    console.log("Boolean Lector Acc : " + this.lectorPantalla)

    if (this.lectorPantalla) {
      this.accService.leerContenido.emit();
      console.log("Funcion Activar Lector");
      this.parrafo.text = this.lectorActivado;
      speechSynthesis.speak(this.parrafo);
    }
    if (!this.lectorPantalla) {
      this.accService.leerContenido2.emit();
      this.accService.cancelarContenido.emit();
      console.log("Funcion Desactivar Lector");
      this.parrafo.text = this.lectorDesactivado;
      speechSynthesis.speak(this.parrafo);

    }
  }

  botonPresionadoFuncion2(): void {
    this.botonPresionado2 = !this.botonPresionado2;
  }

  botonPresionadoFuncion3(): void {
    this.botonPresionado3 = !this.botonPresionado3;
  }

  botonPresionadoFuncion4(): void {
    this.botonPresionado4 = !this.botonPresionado4;
  }

  botonPresionadoFuncion5(): void {
    this.botonPresionado5 = !this.botonPresionado5;
  }

  botonPresionadoFuncion6(): void {
    this.botonPresionado6 = !this.botonPresionado6;
  }

  botonPresionadoFuncion7(): void {
    this.botonPresionado7 = !this.botonPresionado7;
  }

  agrandarTexto2(): void {
    this.accService.letraGrandeBooleanServicio =
      !this.accService.letraGrandeBooleanServicio;
    console.log(
      'Agrandar Texto: ' + this.accService.letraGrandeBooleanServicio
    );
  }

  resaltarEnlaces1(): void {
    this.accService.linkResaltadoBooleanServicio =
      !this.accService.linkResaltadoBooleanServicio;
    console.log(
      'Resaltar Enlaces: ' + this.accService.linkResaltadoBooleanServicio
    );
  }

  alinearTexto1(): void {
    this.accService.alinearTextoBooleanServicio =
      !this.accService.alinearTextoBooleanServicio;
    console.log(
      'Alinear Texto: ' + this.accService.alinearTextoBooleanServicio
    );
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
