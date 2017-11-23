import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { ISubscription } from 'rxjs/Subscription';

import { environment } from '../../../environments/environment';
import { MemberInfo } from '../../member-detail/models/member-info';
import * as moment from 'moment';
import * as MemberDetailAction from '../../member-detail/actions/member-detail';
import * as MemberListAction from '../../member-list/actions/member-list';
import * as fromRoot from '../../core/reducers';

@Component({
  selector: 'member-upsert',
  templateUrl: './member-upsert.component.html',
  styleUrls: ['./member-upsert.component.scss']
})
export class MemberUpsertComponent implements OnInit {

  _member: MemberInfo;
  _isPromo: boolean;
  dobError = false;
  @Input() set member(member: MemberInfo) {
    this._member = member;
  }
  @Input() set isPromoMember(promo) {
    this._isPromo = promo;
  }

  get member() {
    return this._member;
  }

  get isPromo() {
    return this._isPromo;
  }

  get genders() {
    return environment.lookups.genders;
  }

  get languages() {
    return environment.lookups.language;
  }

  get memberStatus() {
    return environment.lookups.memberStatus;
  }

  get provinces() {
    return environment.lookups.provinces;
  }

  // get dob() {
  //   return this._member.dob;
  // }

  constructor(public store: Store<fromRoot.State>) { }

  ngOnInit() {
  }

  save() {
    // TODO use confirm dialog
    if (this.member.id) {
      this.store.dispatch(new MemberDetailAction.UpdateMemberSuccess(this.member));
    } else {
      this.store.dispatch(new MemberListAction.SaveMember(this.member));
    }
  }

  cancel() {
    // TODO confirm dialog
    if (this.member.id) {
      this.store.dispatch(new MemberDetailAction.UpdateMemberCancel());
    } else {
      this.store.dispatch(new MemberListAction.AddCancel());
    }
  }

  // convert to mva date format from primeng date format
  selectEffDate(eff) {
    const fmt = environment.dateFormat;
    this._member.vitalityEffdate = moment(eff, fmt).format(environment.dateFormat);
  }

}
