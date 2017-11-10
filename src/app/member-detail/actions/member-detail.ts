import { Action } from '@ngrx/store';
import { MemberDetail } from '../models/member-detail';

export const LOAD = '[MemberDetail] Load';
export const LOAD_SUCCESS = '[MemberDetail] Load Success';
export const LOAD_AUDIT_LOG = '[MemberDetail] Load Audit Log';
export const LOAD_AUDIT_LOG_SUCCESS = '[MemberDetail] Load Audit Log Success';

export const UPDATE = '[MemberDetail] Update';
export const UPDATE_SUCCESS = '[MemberDetail] Update Success';

export class Load implements Action {
  readonly type = LOAD;

  constructor(public payload: string) {}
}

export class LoadSuccess implements Action {
  readonly type = LOAD_SUCCESS;

  constructor(public payload: MemberDetail) {}
}

export class Update implements Action {
  readonly type = UPDATE;

  constructor(public payload: MemberDetail) {}
}

export class UpdateSuccess implements Action {
  readonly type = UPDATE_SUCCESS;

  constructor(public payload?: MemberDetail) {}
}

export type Actions =
  | Load
  | LoadSuccess
  | UpdateSuccess
  | Update
 