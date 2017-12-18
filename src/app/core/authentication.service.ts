import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
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
    public store: Store<fromRoot.State>,
    public router: Router, 
    public http: HttpClient,
    public localStorage: LocalStorageService
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

          this.http.get(`${environment.roleUrl}/${auth.user_name}`)
            .subscribe((roles: any) => this.store.dispatch(new AuthActiion.LoginSuccess(roles.permission)));
        }
    });  
  }

}