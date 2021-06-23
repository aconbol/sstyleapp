import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { restService } from '../../environments/environment';

import Auth from '@aws-amplify/auth';

@Injectable({
  providedIn: 'root',
})
export class ReststyleService {
  restpoint = 'http://' + restService.restServer + ':' + restService.restPort;

  constructor(private http: HttpClient) {}

  getAccessJwtToken = async () => {
    // Auth.currentSession() checks if token is expired and refreshes with Cognito if needed automatically
    const session = await Auth.currentSession();
    return session.getAccessToken().getJwtToken();
  };

  async verEstado() {
    const urlrest = this.restpoint + '/servicios/estado';
    const header = new HttpHeaders()
      .set('content-type', 'application/json')
      .set(
        'Authorization',
        `${(await Auth.currentSession()).getAccessToken().getJwtToken()}`
      );
    console.log('Ver Estado Headers', header);
    try {
      return this.http.get(urlrest, { headers: header });
    } catch (e) {
      console.log('Exception', e);
      alert('Error en el servicio, llame a su Contácto Técnico...');
    }
  }

  async modelo(datos) {
    const urlrest = this.restpoint + '/servicios/modelo';
    let header = new HttpHeaders({});
    header = new HttpHeaders()
      .set('content-type', 'application/json')
      .set(
        'Authorization',
        `${(await Auth.currentSession()).getAccessToken().getJwtToken()}`
      );
    console.log('URL, HEADERS => ', urlrest, header);
    return this.http.post(urlrest, datos, { headers: header });
  }

  async setup(datos) {
    const urlrest = this.restpoint + '/servicios/setup';
    const header = new HttpHeaders()
      .set('content-type', 'application/json')
      .set(
        'Authorization',
        `${(await Auth.currentSession()).getAccessToken().getJwtToken()}`
      );
    console.log('datos requeridos en Servicios/setup', datos, urlrest, header);
    return this.http.post(urlrest, datos, { headers: header });
  }

  async convert(datos) {
    const urlrest = this.restpoint + '/servicios/convert';
    const header = new HttpHeaders()
      .set('content-type', 'application/json')
      .set(
        'Authorization',
        `${(await Auth.currentSession()).getAccessToken().getJwtToken()}`
      );
    console.log('datos requeridos en Servicios/setup', datos, urlrest, header);
    return this.http.post(urlrest, datos, { headers: header });
  }

}
