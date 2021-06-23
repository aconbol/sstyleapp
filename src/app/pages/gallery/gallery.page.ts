import { Component, OnInit } from '@angular/core';

import { LoaderService } from '../../services/loader.service';
import { GraphqlService } from '../../services/graphql.service';
import { Storage } from 'aws-amplify';
import { Fotos } from '../../interfaces/fotos';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {
  base64File: any;
  fileimg: any = {
    name: null,
    lastModifiedDate: null,
  };
  foto: Fotos = {
    cliente: null,
    username: null,
    archivo: null,
  };

  constructor(
    private graphServ: GraphqlService,
    private loaderService: LoaderService,
    private dataServ: DataService,
    private router: Router
  ) {}

  ngOnInit() {}

  upload(): Promise<void> {
    return new Promise<void>(async (resolve, reject) => {
      const filePicker = document.querySelector('input');

      console.log('Iniciar file picker');
      if (!filePicker || !filePicker.files || filePicker.files.length <= 0) {
        reject('No file selected.');
        return;
      }
      this.fileimg = filePicker.files[0];
      this.base64File = await this.convert(this.fileimg);
      // console.log(`Your base64 image is ${this.base64File}`);
      resolve();
    });
  }

  uploadAWS(fupAws) {
    if (fupAws.valid) {
      console.log(this.foto);
      const username = JSON.parse(localStorage.getItem('usuario')).username;
      console.log('Usuario a cargo', username);
      if (this.fileimg.name) {
        this.loaderService.showLoader();
        Storage.put(`imagenes/${username}/${this.fileimg.name}`, this.fileimg, {
          type: this.fileimg.type,
        })
          .then((resp) => {
            console.log('Respuesta de S3:', resp);
            // eslint-disable-next-line @typescript-eslint/dot-notation
            this.foto.archivo = resp['key'];
            this.loaderService.hideLoader();
            const dia = new Date();
            this.foto.timestamp = dia.toString();
            this.foto.username = username;
            this.graphServ.createFotos(this.foto); // GUARDAR DATOS EN BD
            this.dataServ.setDatosFoto(this.foto);
            this.dataServ.setFotoOriginal(this.base64File);
            this.router.navigateByUrl('/main/tabs/tab1');
          })
          .catch((error) => {
            console.log(error);
            this.loaderService.hideLoader();
            alert('Error al subir información, verificar sus datos...');
          });
      }
    } else {
      alert('Los campos son obligatorios, revisar datos');
    }
  }

  onClick() {
    const filter = {
      cliente: { eq: 'Aconbol 2' },
    };
    console.log('Query con filtro', filter);
    this.graphServ.listarFotosFilter(filter);
  }

  private convert(myFile: File): Promise<string | ArrayBuffer> {
    return new Promise<string | ArrayBuffer>((resolve, reject) => {
      const fileReader = new FileReader();
      if (fileReader && myFile) {
        fileReader.readAsDataURL(myFile);
        fileReader.onload = () => {
          resolve(fileReader.result);
        };
        fileReader.onerror = (error) => {
          reject(error);
        };
      } else {
        reject('No file provided');
      }
    });
  }
}
