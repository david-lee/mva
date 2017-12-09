import { Injectable } from '@angular/core';
import { Router, Route, CanActivate, CanActivateChild, CanLoad,
  ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/take';

import * as AuthActiion from './actions/auth';
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
    return this.store
      .select(fromRoot.getIsAuthed)
      .map(authed => {
        if (authed) {
          return true;
        }

        this.store.dispatch(new AuthActiion.RedirectToHome());
        return false;        
      })
      .take(1); // DO NOT REMOVE
  }
}
