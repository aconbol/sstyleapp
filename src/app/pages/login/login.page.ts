import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonSlides, NavController } from '@ionic/angular';

import { AuthService } from './../../services/auth.service';
import { Usuario } from './../../interfaces/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @ViewChild('slidesPrincipal') slides: IonSlides;

  loginUser = {
    usuario: null,
    password: null,
  };
  changePass = {
    passnuevo: null,
    passrepetir: null,
  };
  usuario: Usuario = {
    user: null,
    username: null,
    tokens: null,
  };
  user: any;

  constructor(private navCtrl: NavController, private authServ: AuthService) {}

  ngOnInit() {}

  ionViewDidEnter() {
    this.slides.lockSwipes(true);
  }

  async login(fLogin: NgForm) {
    if (fLogin.valid) {
      this.user = await this.authServ.login(
        this.loginUser.usuario.toString(),
        this.loginUser.password.toString()
      );
      console.log(
        'Authentication performed for user= ' +
          this.loginUser.usuario +
          ' login result= ' +
          this.user
      );
      if (this.user != null) {
        if (this.user.challengeName === 'NEW_PASSWORD_REQUIRED') {
          this.slides.lockSwipes(false);
          this.slides.slideTo(1);
          this.slides.lockSwipes(true);
        } else {
          this.usuario.user = this.user;
          this.usuario.username = this.loginUser.usuario;
          this.usuario.tokens = this.user.signInUserSession;
          console.log(
            'User authenticated - tokens: ',
            this.usuario.user,
            this.usuario.tokens
          );
          localStorage.setItem('usuario', JSON.stringify(this.usuario));
          this.navCtrl.navigateRoot('/main/tabs/tab1', { animated: true });
        }
      }
    }
  }

  async cambiopassword(fRegistro) {
    // Cambio de password inicial
    console.log('cambio de contraseña', fRegistro.valid);
    if (fRegistro.valid) {
      if (this.changePass.passnuevo === this.changePass.passrepetir) {
        if (
          await this.authServ.completeNewPassword(
            this.user,
            this.changePass.passnuevo
          )
        ) {
          this.slides.lockSwipes(false);
          this.slides.slideTo(0);
          this.slides.lockSwipes(true);
          alert('Se cambio la contraseña con éxito, ingrese de nuevo!');
        }
      } else {
        alert('Las contraseñas no son iguales, intente de nuevo');
      }
    }
  }
}
