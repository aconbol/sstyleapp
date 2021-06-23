import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private fotoOriginal: any;
  private datosFoto: any;

  constructor() {}

  setFotoOriginal(fotoOriginal: any) {
    this.fotoOriginal = fotoOriginal;
  }

  getFotoOriginal() {
    return this.fotoOriginal;
  }

  setDatosFoto(datosFoto: any) {
    this.datosFoto = datosFoto;
  }

  getDatosFoto() {
    return this.datosFoto;
  }

}
