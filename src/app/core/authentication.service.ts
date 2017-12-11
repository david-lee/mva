import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';

import { LocalStorageService } from '../core/local-storage.service';
import { environment } from '../../environments/environment';
import { keycloak } from '../core/mva-keycloak';
import * as _ from 'lodash';
import * as AuthActiion from './actions/auth';
import * as fromRoot from './reducers';

@Injectable()
export class AuthenticationService {
  redirectUrl: string = '';

  constructor(
    private store: Store<fromRoot.State>,
    private router: Router, 
    private localStorage: LocalStorageService
  ) {
  }
  
  login() {
    let _keycloak = keycloak(environment.ssoConfig);
    
    (<any>_keycloak)
      .init({onLoad: 'login-required', flow: 'standard', responseMode: 'query'})
      .success(authed => {
        if (authed) {
          let auth = _.pick((<any>_keycloak).tokenParsed, ['user_id','user_name','email','auth_time','exp']);
          this.localStorage.set('auth', auth);
          console.log('User ID: ', auth.user_id);
          console.log('User Name: ', auth.user_name);

          // TODO call api to get lan id, if user id doesn't work
          // https://ldap-svc.apps.cac.preview.pcf.manulife.com/api/entitlements/{user_name}
          
          // TODO if need, save request url and redirect after login
          this.store.dispatch(new AuthActiion.LoginSuccess(auth.user_name));// should be land_id
        }
    });  
  }

}