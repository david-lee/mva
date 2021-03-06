import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';

import { Member } from '../models/member';
import { MemberListService } from '../member-list.service';
import * as MemberListAction from '../actions/member-list';

@Injectable()
export class MemberListEffects {
  @Effect()
  load$ = this.actions$
    .ofType(MemberListAction.LOAD, MemberListAction.RELOAD)
    .switchMap(() =>
      this.memberService
        .loadMembers()
        .map((members: any) => {
          return new MemberListAction.LoadSuccess(members.data);
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

  constructor(
    private actions$: Actions,
    private memberService: MemberListService,
    private router: Router
  ) {}
}
