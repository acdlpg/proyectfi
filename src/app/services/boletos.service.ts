import { Time } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BoletosService {
  private boletos: Boleto[] = [];

  constructor() {}

  getTickets(): Boleto[] {
    return this.boletos;
  }
}

export interface Boleto {
  usuario: string;
  pelicula: string;
  fecha: Date;
  hora: Time;
  sala: number;
}
