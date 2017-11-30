import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { ISubscription } from 'rxjs/Subscription';

import {Message} from 'primeng/components/common/api';
import * as OverlayState from './core/reducers/overlay';
import * as fromRoot from './core/reducers';

@Component({
  selector: 'mva-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  overlay$: Observable<OverlayState.State>;
  showBackdrop: boolean;
  showSpinner: boolean;
  messages: Message[];

  subscriptions: ISubscription[] = [];

  constructor(public store: Store<fromRoot.State>) {}

  ngOnInit() {
    this.overlay$ = this.store.select(fromRoot.getOverlayState);

    this.subscriptions.push(
      this.store.select(fromRoot.getShowBackdrop)
        .subscribe(backdrop => this.showBackdrop = backdrop)
    );
    this.subscriptions.push(
      this.store.select(fromRoot.getShowSpinner)
        .subscribe(showSpinner => this.showSpinner = showSpinner)
    );
    this.subscriptions.push(
      this.store.select(fromRoot.getMessages)
        .subscribe(messages => {
          console.log('==> ', messages);
          this.messages = messages;
        })
    );
  }

  ngOnDestroy() {
  }
}
