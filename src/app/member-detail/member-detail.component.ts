import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { ISubscription } from 'rxjs/Subscription';

import { MemberDetail } from './models/member-detail';
import * as MemberDetailAction from './actions/member-detail';
import * as fromRoot from '../core/reducers';
import { environment } from '../../environments/environment';

@Component({
  selector: 'mva-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.scss']
})
export class MemberDetailComponent implements OnInit, OnDestroy {

  memberDetail: MemberDetail;
  subscription: ISubscription;

  get firstName() {
    return this.memberDetail.firstName;
  }
  get memberId() {
    return this.memberDetail.id;
  }

  constructor(public store: Store<fromRoot.State>, public route: ActivatedRoute,) { 
  }

  ngOnInit() {
    let memberId = this.route.snapshot.paramMap.get('memberId');
    console.log('detail: ', memberId);

    this.subscription = this.store.select(fromRoot.getMemberDetail)
      .subscribe((memberDetail: MemberDetail) => {
        this.memberDetail = memberDetail;
      });

    this.store.dispatch(new MemberDetailAction.Load(memberId));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
