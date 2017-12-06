import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LocalStorageService } from '../core/local-storage.service';
import { environment } from '../../environments/environment';
import * as Keycloak from '../core/mva-keycloak.js';
import * as _ from 'lodash';

@Component({
  selector: 'mva-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public router: Router, public localStorage: LocalStorageService) { }

  ngOnInit() {
    let keycloak = Keycloak(environment.ssoConfig);
    
    keycloak.init({onLoad: 'login-required', flow: 'standard', responseMode: 'query'})
      .success(authed => {
        if (authed) {
          this.localStorage.set('auth', _.pick(keycloak.tokenParsed, ['user_id','user_name','email','auth_time','exp']));
          this.router.navigate(['/members']);
        } else {
          console.log('401 error');
        }
      });    
  }

}
