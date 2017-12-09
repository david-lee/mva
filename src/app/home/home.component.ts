import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { LocalStorageService } from '../core/local-storage.service';
import { environment } from '../../environments/environment';
import { keycloak } from '../core/mva-keycloak';
import { AuthenticationService } from '../core/authentication.service';
import * as fromRoot from '../core/reducers';
import * as _ from 'lodash';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public router: Router, public authService: AuthenticationService) { }

  ngOnInit() {
    console.log('home component....');
    this.authService.login();
  }

}
