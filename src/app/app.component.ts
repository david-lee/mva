import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { ISubscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';

import * as BackdropState from './core/reducers/backdrop';
import * as fromRoot from './core/reducers';

@Component({
  selector: 'mva-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  backdrop$: Observable<BackdropState.State>;

  constructor(public store: Store<fromRoot.State>) {}

  ngOnInit() {
    this.backdrop$ = this.store.select(fromRoot.getBackdropState);
  }

  ngOnDestroy() {

  }
}
