import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import * as Rx from 'rxjs/Rx';

import { LocalStorageService } from '../core/local-storage.service';
import { environment } from '../../environments/environment';
import { keycloak } from '../core/mva-keycloak';
import * as _ from 'lodash';
import * as AuthActiion from './actions/auth';
import * as fromRoot from './reducers';

@Injectable()
export class AuthenticationService {
  constructor(
    public store: Store<fromRoot.State>,
    public router: Router,
    public http: HttpClient,
    public localStorage: LocalStorageService
  ) {}

  addDefaultToLookup(lookups) {
    return [{ label: 'All', value: null }, ...lookups];
  }

  login() {
    const _keycloak = keycloak(environment.ssoConfig);

    (<any>_keycloak).init({ onLoad: 'login-required', flow: 'standard', responseMode: 'query' }).success(authed => {
      if (authed) {
        const auth = _.pick((<any>_keycloak).tokenParsed, ['user_id', 'user_name', 'email', 'auth_time', 'exp']);
        this.localStorage.set('auth', auth);

        const roles$ = this.http.get(`${environment.endPoints.roles}/${auth.user_name}`);
        const lookups$ = this.http.get(`${environment.endPoints.lookups}`);

        Rx.Observable.forkJoin(roles$, lookups$).subscribe((data: any) => {
          environment.lookups = data[1];

          if (data[0].permission.length === 0) {
            this.store.dispatch(new AuthActiion.RedirectToNoPermission());
          } else {
            environment.lookups.genders = this.addDefaultToLookup(environment.lookups.genders);
            environment.lookups.customerRoles = this.addDefaultToLookup(environment.lookups.customerRoles);
            environment.lookups.branches = this.addDefaultToLookup(environment.lookups.branches);

            this.store.dispatch(
              new AuthActiion.LoginSuccess({ permission: data[0].permission, lanId: auth.user_name })
            );
          }
        });
      }
    });
  }
}
