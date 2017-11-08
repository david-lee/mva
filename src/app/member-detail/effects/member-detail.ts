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

import { MemberDetail } from '../models/member-detail';
import { MemberDetailService } from '../member-detail.service';
import * as MemberDetailAction from '../actions/member-detail';

@Injectable()
export class MemberListEffects {

  @Effect()
  load$ = this.actions$
    .ofType(MemberDetailAction.LOAD)
    .switchMap(() =>
      this.memberService
        .loadMember()
        .map((member: any) => {
          return new MemberDetailAction.LoadSuccess(member.data);
        })
        .catch(error => { throw error; })
    ); 

  constructor(
    private actions$: Actions,
    private memberService: MemberDetailService,
    private router: Router
  ) {}
}
