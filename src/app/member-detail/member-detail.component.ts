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
  get lastName() {
    return this.memberDetail.lastName;
  }
  get middleName() {
    return this.memberDetail.middleName;
  }
  get memberId() {
    return this.memberDetail.id;
  }
  get source() {
    return this.memberDetail.sourceSystem;
  }
  get alternativeId() {
    return this.memberDetail.altMemberId;
  }
  get dob() {
    return this.memberDetail.dob;
  }
  get gender() {
    return this.memberDetail.gender;
  }
  get role() {
    return this.memberDetail.customerRole;
  }
  get lastUpdateDate() {
    return this.memberDetail.lastUpdateDate;
  }
  get lastUpdateUser() {
    return this.memberDetail.lastUpdateUser;
  }
  get membershipStatus() {
    return this.memberDetail.membershipStatus;
  }
  get membershipEffDate() {
    return this.memberDetail.membershipEffdate;
  }
  get address1() {
    return this.memberDetail.address1;
  }
  get address2() {
    return this.memberDetail.address2;
  }
  get city() {
    return this.memberDetail.city;
  }
  get province() {
    return this.memberDetail.province;
  }
  get country() {
    return this.memberDetail.country;
  }
  get postalCode() {
    return this.memberDetail.postalCode;
  }
  get vitalityProdcode() {
    return this.memberDetail.vitalityProdcode;
  }
  get vitalityProdcodeEffDate() {
    return this.memberDetail.vitalityProdcodeEffdate;
  }
  get employerExternalId() {
    return this.memberDetail.employerExternalId;
  }
  get employerBranchId() {
    return this.memberDetail.employerBranchId;
  }
  get relationshipCode() {
    return this.memberDetail.relationshipCode;
  }
  get SIN() {
    return this.memberDetail.sin;
  }
  get email() {
    return this.memberDetail.email;
  }
  get vitalityEffDate() {
    return this.memberDetail.vitalityEffdate;
  }
  get vitalityTermDate() {
    return this.memberDetail.vitalityTermdate;
  }
  get language() {
    return this.memberDetail.language;
  }
  get accountStrategy() {
    return this.memberDetail.accountStrategy;
  }
  get altMemberId() {
    return this.memberDetail.altMemberId;
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
