import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';

import { MemberDetail } from '../models/member-detail';
import { MemberDetailService } from '../member-detail.service';
import * as MemberDetailAction from '../actions/member-detail';

@Injectable()
export class MemberDetailEffects {

  @Effect()
  load$ = this.actions$
    .ofType(MemberDetailAction.LOAD)
    .map((action: any) => action.payload)
    .switchMap((memberId) =>
      this.memberDetailService
        .loadMemberDetail(memberId)
        .map((memberDetail: any) => {
          memberDetail.data.memberInfo.id = memberId;
          return new MemberDetailAction.LoadSuccess(memberDetail.data);
        })
        .catch(error => { throw error; })
    ); 

  constructor(
    private actions$: Actions,
    private memberDetailService: MemberDetailService,
    private router: Router
  ) {}
}
