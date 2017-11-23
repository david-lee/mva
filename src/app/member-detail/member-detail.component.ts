import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { ISubscription } from 'rxjs/Subscription';

import { MemberDetail, MemberInfo, Account, Biometrics, AuditLog } from '../models/member-detail';
import * as MemberDetailAction from './actions/member-detail';
import * as fromRoot from '../core/reducers';
import * as _ from 'lodash';
import * as moment from 'moment';
import { SelectItem } from 'primeng/primeng';

@Component({
  selector: 'mva-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.scss']
})
export class MemberDetailComponent implements OnInit, OnDestroy {

  @ViewChild('bioDT') bioDT;

  accounts$: Observable<any>;
  biometrics: Biometrics[];
  member: MemberInfo[]; // dataTable component requires an array of value
  auditLogs: AuditLog[];
  subscriptions: ISubscription[] = [];
  upsertMember: MemberInfo;
  upsertBiometrics: Biometrics;

  get isPromoMember() {
    return this.member[0].customerRole.toLowerCase().indexOf('promo') >= 0;
  }

  constructor(public store: Store<fromRoot.State>, public route: ActivatedRoute, public location: Location) {
  }

  ngOnInit() {
    const memberId = this.route.snapshot.paramMap.get('memberId');

    this.subscriptions.push(
      this.store.select(fromRoot.getMemberDetailInfo)
        .subscribe(memberInfo => {
          this.member = [memberInfo];
        })
    );

    this.accounts$ = this.store.select(fromRoot.getAccounts);

    this.subscriptions.push(
      this.store.select(fromRoot.getBiometrics)
        .subscribe(biometrics => {
          this.biometrics = biometrics;
        })
    );

    this.subscriptions.push(
      this.store.select(fromRoot.getUpsertMember)
        .subscribe((member: MemberInfo) => {
          this.upsertMember = member;
        })
    );

    this.subscriptions.push(
      this.store.select(fromRoot.getUpsertBiometrics)
        .subscribe((bio: Biometrics) => {
          this.upsertBiometrics = bio;
        })
    );

    this.subscriptions.push(
      this.store.select(fromRoot.getAuditLogs)
        .subscribe((auditLogs: AuditLog[]) => {
          this.auditLogs = auditLogs;
        })
    );

    this.store.dispatch(new MemberDetailAction.Load(memberId));
  }

  ngOnDestroy() {
    _.forEach(this.subscriptions, (subscription: ISubscription) => {
      subscription.unsubscribe();
    });
  }

  editMember() {
    this.store.dispatch(new MemberDetailAction.UpdateMember());
  }

  viewAuditLog() {
    this.store.dispatch(new MemberDetailAction.LoadAuditLog());
  }

  gotoMemberList() {
    this.location.back();
  }

  doUpsertBiometrics(bio: Biometrics = <any>{}) {
    this.store.dispatch(new MemberDetailAction.UpdateBio(bio));
  }
}
