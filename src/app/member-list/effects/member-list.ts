import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';

import { Member } from '../../models/member';
import { MemberInfo } from '../../models/member-info';
import { MemberListService } from '../member-list.service';
import * as MemberListAction from '../actions/member-list';
import * as _ from 'lodash';

@Injectable()
export class MemberListEffects {
  @Effect()
  load$ = this.actions$
    .ofType(MemberListAction.LOAD, MemberListAction.RELOAD)
    .switchMap(() =>
      this.memberService
        .loadMembers()
        .map((members: Member[]) => {
          return new MemberListAction.LoadSuccess(members);
        })
        .catch(error => { throw error; })
    );

  @Effect({dispatch: false})
  loadDetail$ = this.actions$
    .ofType(MemberListAction.LOAD_DETAIL)
    .map((action: MemberListAction.LoadDetail) => action.payload)
    .do((memberId) => {
      this.router.navigate(['/member', memberId]);
    });

  @Effect()
  saveMember$ = this.actions$
    .ofType(MemberListAction.SAVE_MEMBER)
    .map((action: MemberListAction.SaveMember) => action.payload)
    .switchMap((member: MemberInfo) =>
      this.memberService
        .saveMember(member)
        .map(savedMember => {
          return new MemberListAction.AddSuccess(savedMember.data);
        })
        .catch(error => { throw error; })
    );

  constructor(
    private actions$: Actions,
    private memberService: MemberListService,
    private router: Router
  ) {}
}
