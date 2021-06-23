import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';

import Auth from '@aws-amplify/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanLoad {
  constructor(private _router: Router) {}

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean> | Promise<boolean> | boolean {
    return Auth.currentAuthenticatedUser()
      .then(() => {
        console.log('loggedIn');
        return true;
      })
      .catch(() => {
        console.log('loggedOut');
        this._router.navigate(['login']);
        return false;
      });
  }
}
