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
        .map((members: Member[]) => new MemberListAction.LoadSuccess(members))
        // .catch(error => { throw error; })
    );

  @Effect({dispatch: false})
  loadDetail$ = this.actions$
    .ofType(MemberListAction.LOAD_DETAIL)
    .map((action: MemberListAction.LoadDetail) => action.payload)
    .do((memberId) => this.router.navigate(['/member', memberId]));

  @Effect()
  saveMember$ = this.actions$
    .ofType(MemberListAction.ADD_MEMBER)
    .map((action: MemberListAction.AddMember) => action.payload)
    .switchMap((addMember: any) =>
      this.memberService
        .saveMember(addMember)
        .map(savedMember => new MemberListAction.AddSuccess(savedMember.data))
    );

  @Effect()
  updateEmail$ = this.actions$
    .ofType(MemberListAction.UPDATE_EMAIL)
    .map((action: MemberListAction.UpdateEmail) => action.payload)
    .switchMap((updateInfo: any) => {
      const member = updateInfo.member;
      const lanId = updateInfo.lanId;

      return this.memberService
        .updateEmail(member.email, member.id, lanId)
        .map(response => new MemberListAction.UpdateEmailSuccess());
      }
    );    

  constructor(
    private actions$: Actions,
    private memberService: MemberListService,
    private router: Router
  ) {}
}
