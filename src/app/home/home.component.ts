import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LocalStorageService } from '../core/local-storage.service';
import { environment } from '../../environments/environment';
import { keycloak } from '../core/mva-keycloak';
import * as _ from 'lodash';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public router: Router, public localStorage: LocalStorageService) { }

  ngOnInit() {
    let _keycloak = keycloak(environment.ssoConfig);
    
    (<any>_keycloak)
      .init({onLoad: 'login-required', flow: 'standard', responseMode: 'query'})
      .success(authed => {
        if (authed) {
          let auth = _.pick((<any>_keycloak).tokenParsed, ['user_id','user_name','email','auth_time','exp']);
          this.localStorage.set('auth', auth);
          console.log('User ID: ', auth.user_id);
          console.log('User Name: ', auth.user_name);

          // TODO save into state, 
          // TODO if need, save request url and redirect after login

          this.router.navigate(['/members']);
        } else {
          console.log('401 error');
        }
      });    
  }

}
