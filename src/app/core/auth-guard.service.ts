import { Injectable } from '@angular/core';
import { 
  Router, Route,
  CanActivate, CanActivateChild, CanLoad,
  ActivatedRouteSnapshot, RouterStateSnapshot, NavigationExtras } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import * as OverlayActiion from './actions/overlay';
import * as fromRoot from './reducers';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(
    private router: Router,
    private store: Store<fromRoot.State>
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    let url: string = state.url;

    return this.checkLogin(url);
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.canActivate(route, state);
  }

  canLoad(route: Route): Observable<boolean> {
    let url = `/${route.path}`;

    return this.checkLogin(url);
  }

  checkLogin(url: string): Observable<boolean> {
    let isLoginUrl = url.toLocaleLowerCase().indexOf('/login') >= 0;

    return this.store
      .select(fromRoot.getIsAuthed)
      .map(authed => {
        if (authed) {
          // TODO need to define how to logout after token expiry
          // 1. automatically logout as soon as it is expiried by checking with setInterval
          // 2. check it when every api call

          // if (checkTokenExpiry) {
          //   return false;
          // }

          if (isLoginUrl) {
            // when a authed user enters a login url, just navigates to home(default)
            // this.store.dispatch(new OverlayActiion.LoginRedirectToHome());
            return false;
          } 
          else {
            return true;
          }
        } 
        else if (isLoginUrl) {
          return true;
        }

        // this.store.dispatch(new OverlayActiion.LoginRedirect());
        return false;        
      });
  }
}