import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Fotos } from './../../interfaces/fotos';
import { Tab } from '../../interfaces/tab';
import { LoaderService } from './../../services/loader.service';
import { DataService } from './../../services/data.service';
import { ReststyleService } from './../../services/reststyle.service';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements Tab {
  imgBase64: string = null;
  imgResult64: string = null;
  imgAlign64: string = null;

  dataFoto: Fotos = {
    cliente: null,
    username: null,
    archivo: null,
    timestamp: null,
  };

  constructor(
    private authService: AuthService,
    private router: Router,
    private restSstyle: ReststyleService,
    private dataServ: DataService,
    private loader: LoaderService
  ) {}

  transferirFoto() {
    this.imgBase64 = this.dataServ.getFotoOriginal();
    if (this.imgBase64) {
      this.dataFoto = this.dataServ.getDatosFoto();
    }
  }

  logout() {
    this.authService.logout().then(() => {
      console.log('Saliendo LOGOUT...');
      this.router.navigate(['login']);
    });
  }

  verEstado() {
    this.restSstyle
      .verEstado()
      .then((res) => {
        res.forEach((data) => {
          console.log('Devolucion: ', data);
          // eslint-disable-next-line @typescript-eslint/dot-notation
          if (data['modo'] === 'cuda') {
            alert('El servicio esta funcionando correctamente...');
          } else {
            alert('Error en el servicio, llame a su Contácto Técnico...');
          }
        }).catch(error => {
          console.log('error en el servicio RES: ', error);
          alert('Error en el servicio, llame a su Contácto Técnico...');
        });
      })
      .catch((err) => {
        console.log('error en el servicio: ', err);
        alert('Error en el servicio, llame a su Contácto Técnico...');
      });
  }

  subirFoto() {
    console.log('Subir foto');
    this.router.navigate(['gallery']);
  }

  setup() {
    console.log('Alinear Imagen... ');
    this.loader.showLoader();
    const datos = {
      datosFoto: this.dataFoto,
      imgBase64: this.imgBase64,
    };
    this.restSstyle.setup(datos).then((resp) => {
      resp.forEach((data) => {
        console.log('SETUP - TAB1 - Respuesta de servicios/setup', data);
        // eslint-disable-next-line @typescript-eslint/dot-notation
        this.imgResult64 = 'data:image/jpeg;base64,' + data['result_image'];
        this.loader.hideLoader();
      }).catch(error => {
        this.loader.hideLoader();
        console.log('error en el servicio SETUP: ', error);
        alert('La imágen no es compatible o verifique el servicio');
      });
    }).catch(error => {
      this.loader.hideLoader();
      console.log('error en el servicio (REST) SETUP: ', error);
      alert('Error en el servicio, llame a su Contácto Técnico...');
    });
  }

  tabsWillEnter() {}
  tabsDidEnter() {
    console.log('Tabs1 tabsDidEnter...');
    this.transferirFoto();
  }
  tabsWillLeave() {}
  tabsDidLeave() {}
}
