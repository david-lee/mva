import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { ISubscription } from 'rxjs/Subscription';

import { MemberDetail, MemberInfo, Account, Biometrics } from './models/member-detail';
import * as MemberDetailAction from './actions/member-detail';
import * as fromRoot from '../core/reducers';
import { environment } from '../../environments/environment';
import * as _ from 'lodash';

@Component({
  selector: 'mva-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.scss']
})
export class MemberDetailComponent implements OnInit, OnDestroy {

  @ViewChild('bioDT') bioDT;

  accounts: Account[];
  biometrics: Biometrics[];
  member: MemberInfo[]; // dataTable component requires an array of value
  subscription: ISubscription;
  
  constructor(public store: Store<fromRoot.State>, public route: ActivatedRoute,) { 
  }

  ngOnInit() {
    let memberId = this.route.snapshot.paramMap.get('memberId');

    this.subscription = this.store.select(fromRoot.getMemberDetail)
      .subscribe((memberDetail: MemberDetail) => {
        if (memberDetail) {
          this.member = [memberDetail.memberInfo];
          this.accounts = memberDetail.accounts;
          this.biometrics = memberDetail.biometrics;
        }
      });

    this.store.dispatch(new MemberDetailAction.Load(memberId));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  expandBio(data) {
    this.bioDT.toggleRow(data);
  }

  viewAuditLog() {
    
  }

  gotoMemberList() {

  }

}
