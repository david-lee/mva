import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { ISubscription } from 'rxjs/Subscription'

import { environment } from '../../../environments/environment';
import { Biometrics } from '../../member-detail/models/member-detail';
import * as moment from 'moment';
import * as MemberDetailAction from '../../member-detail/actions/member-detail';
import * as fromRoot from '../../core/reducers';

@Component({
  selector: 'bio-upsert',
  templateUrl: './bio-upsert.component.html',
  styleUrls: ['./bio-upsert.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BioUpsertComponent implements OnInit {

  _bio: Biometrics;

  @Input() set bio(bio: Biometrics) {
    this._bio = bio;
  }

  get bio() {
    return this._bio;
  }

  get cotinines() {
    return environment.lookups.cotinines;
  }

  constructor(public store: Store<fromRoot.State>) { }

  ngOnInit() {
  }

  add() {
    this.store.dispatch(new MemberDetailAction.AddBioSuccess(this.bio));
  }

  save() {
    this.store.dispatch(new MemberDetailAction.UpdateBioSuccess(this.bio));
  }

  cancel() {
    this.store.dispatch(new MemberDetailAction.UpdateBioCancel());
  }

}