import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { ISubscription } from 'rxjs/Subscription'

import { environment } from '../../../environments/environment';
import { MemberInfo } from '../../member-detail/models/member-info';
import * as moment from 'moment';
import * as MemberDetailAction from '../../member-detail/actions/member-detail';
import * as fromRoot from '../../core/reducers';

@Component({
  selector: 'member-upsert',
  templateUrl: './member-upsert.component.html',
  styleUrls: ['./member-upsert.component.scss']
})
export class MemberUpsertComponent implements OnInit {

  _member: MemberInfo;
  _isPromo: boolean;

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

  constructor(public store: Store<fromRoot.State>) { }

  ngOnInit() {
  }

  save() {
    // TODO use confirm dialog
    this.store.dispatch(new MemberDetailAction.UpdateMemberSuccess(this.member));
  }

  cancel() {
    // TODO confirm dialog
    this.store.dispatch(new MemberDetailAction.UpdateMemberCancel());
  }

}
