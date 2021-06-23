import { LoaderService } from './../../services/loader.service';
import { Component } from '@angular/core';

import { ReststyleService } from 'src/app/services/reststyle.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  imgmodelt64: string = null;
  imgconvert64: string = null;
  elemento = {
    neutral: null,
    target: null,
    fuerza: 4.2,
    canal: 0.16
  };

  constructor(
    private restSstyle: ReststyleService,
    private loader: LoaderService
  ) {}

  modelo() {
    const user = JSON.parse(localStorage.getItem('usuario'));
    // eslint-disable-next-line @typescript-eslint/dot-notation
    const data = { username: user['username'] };
    // eslint-disable-next-line @typescript-eslint/dot-notation
    console.log('Attributos iniciales de MODELO', user, user['username'], user['user']);
    this.loader.showLoader();
    this.restSstyle.modelo(data).then( resp => {
      resp.forEach( dato => {
        console.log('Respuesta Rest de MODELO', dato);
        // eslint-disable-next-line @typescript-eslint/dot-notation
        this.imgmodelt64 = 'data:image/jpeg;base64,' + dato['img_original'];
        this.loader.hideLoader();
      }).catch(error => {
        this.loader.hideLoader();
        console.log('error en el servicio MODELO: ', error);
        alert('La imágen no es compatible o verifique el servicio');
      });
    }).catch(error => {
      this.loader.hideLoader();
      console.log('error en el servicio (Rest) MODELO: ', error);
      alert('La imágen no es compatible o verifique el servicio');
    });
  }

  convert(fconv) {
    if(fconv.valid) {
      const user = JSON.parse(localStorage.getItem('usuario'));
      // eslint-disable-next-line @typescript-eslint/dot-notation
      const data = { username: user['username'], elemento: this.elemento };
      this.loader.showLoader();
      this.restSstyle.convert(data).then(resp =>{
        resp.forEach(dato => {
          console.log('Respuesta Rest de MODELO', dato);
          // eslint-disable-next-line @typescript-eslint/dot-notation
          this.imgconvert64 = 'data:image/jpeg;base64,' + dato['gen_image'];
          this.loader.hideLoader();
        }).catch(error => {
          this.loader.hideLoader();
          console.log('error en el servicio CONVERT: ', error);
          alert('La imágen no es compatible o verifique el servicio');
        });
      }).catch(error => {
        this.loader.hideLoader();
        console.log('error en el servicio (Rest) CONVERT: ', error);
        alert('La imágen no es compatible o verifique el servicio');
      });
    } else {
      alert('los campos son obligatorios, revisar');
    }
  }
}
