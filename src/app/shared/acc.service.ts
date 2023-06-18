import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AccService {
  letraGrandeBooleanServicio: boolean = false;
  linkResaltadoBooleanServicio: boolean = false;
  alinearTextoBooleanServicio: boolean = false;
  
  lectorTextoBooleanServicio: boolean = false;

  leerContenido: EventEmitter<void> = new EventEmitter<void>();
  resumirContenido: EventEmitter<void> = new EventEmitter<void>();
  pausarContenido: EventEmitter<void> = new EventEmitter<void>();
  cancelarContenido: EventEmitter<void> = new EventEmitter<void>();

  leerContenido2: EventEmitter<void> = new EventEmitter<void>();
  



  constructor() {
    
  }

  getletraGrandeBooleanServicio() {
    return this.letraGrandeBooleanServicio;
  }

  setletraGrandeBooleanServicio(valor: boolean) {
    this.letraGrandeBooleanServicio = valor;
  }

  /*
  cambiarPoderLeer(): void {
    this.leer = !this.leer;
  }

  setPoderLeer(valor: boolean): void {
    this.leer = valor;
  }

  getPoderLeer(): boolean {
    return this.leer;
  }
  */
}
