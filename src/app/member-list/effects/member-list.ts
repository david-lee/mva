import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/exhaustMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
// import { map, switchMap, catchError } from 'rxjs/operators';

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

  constructor(
    private actions$: Actions,
    private memberService: MemberListService,
    private router: Router
  ) {}
}
