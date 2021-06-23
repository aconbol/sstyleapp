import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';

import Auth from '@aws-amplify/auth';

@Injectable({
  providedIn: 'root',
})
export class UnauthGuard implements CanLoad {

  constructor(private navCtrl: NavController) {}

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean> | Promise<boolean> | boolean {
    return Auth.currentAuthenticatedUser()
      .then(() => {
        console.log('loggedIn');
        this.navCtrl.navigateRoot('/main/tabs/tab1');
        return false;
      })
      .catch(() => {
        console.log('loggedOut');
        return true;
      });
  }
}
