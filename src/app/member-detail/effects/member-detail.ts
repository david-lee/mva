import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import { Injectable } from '@angular/core';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { of } from 'rxjs/observable/of';

import { MemberDetail } from '../../models/member-detail';
import { MemberDetailService } from '../member-detail.service';
import { AuditService } from '../audit/audit.service';
import * as MemberDetailAction from '../actions/member-detail';
import * as _ from 'lodash';
import { MemberInfo } from '../../models/member-info';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MemberDetailEffects {

  @Effect()
  load$: Observable<Action> = this.actions$
    .ofType(MemberDetailAction.LOAD)
    .map((action: any) => action.payload)
    .mergeMap(memberId =>
      this.memberDetailService
        .loadMemberDetail(memberId)
        .map((memberDetail: any) => {
          // MemberInfo is not grouped in the response
          let newDetail = _.pick(memberDetail, ['accounts', 'biometrics']);
          newDetail.memberInfo = _.omit(memberDetail, ['accounts', 'biometrics']);

          return new MemberDetailAction.LoadSuccess(newDetail);
        })
    );

  @Effect()
  update$ = this.actions$
    .ofType(MemberDetailAction.UPDATE_MEMBER)
    .map((action: any) => action.payload)
    .mergeMap((member: MemberInfo) =>
      this.memberDetailService
        .updateMember(member)
        .map(response => {
          return new MemberDetailAction.UpdateMemberSuccess(member);
        })
        // .catch(error => of(new MemberDetailAction.UpdateMemberFail(member)))
    );

  @Effect()
  loadAudit$ = this.actions$
    .ofType(MemberDetailAction.LOAD_AUDIT_LOG)
    .mergeMap(() =>
      this.auditService
        .loadAuditLog()
        .map((auditLog: any) => {
          return new MemberDetailAction.LoadAuditLogSuccess(auditLog);
        })
    );

  constructor(
    private actions$: Actions,
    private memberDetailService: MemberDetailService,
    private auditService: AuditService
  ) {}
}
