import { Injectable } from '@angular/core';

import Auth from '@aws-amplify/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  async login(usr: string, pass: string) {
    let user = null;
    try {
      user = await Auth.signIn(usr, pass);
    } catch (error) {
      console.log('Mensaje de Error: \n ', error);
      alert('Falló la autenticación: usuario o password no válidos');
    }
    return user;
  }

  async completeNewPassword(usuario: string, password: string) {
    let hecho = true;
    try {
      console.log('servicio de newpass ', usuario);
      await Auth.completeNewPassword(usuario, password)
        .catch(err => {
          hecho = false;
          console.log('Mensaje de Error - Cognito: \n ', err);
          alert('El password no cumple las especificaciones mínimas, intente de nuevo');
        });
    } catch (error) {
      hecho = false;
      console.log('Mensaje de Error: \n ', error);
      alert('El password no cumple las especificaciones mínimas, intente de nuevo');
    }
    return hecho;
  }


  logout() {
    localStorage.setItem('usuario', '');
    return Auth.signOut();
  }

}
