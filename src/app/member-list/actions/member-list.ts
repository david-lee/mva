import { Action } from '@ngrx/store';
import { Member } from '../../models/member';
import { MemberInfo } from '../../models/member-info';

export const LOAD = '[Member] Load';
export const LOAD_SUCCESS = '[Member] Load Success';
export const LOAD_DETAIL = '[Member] Load Detail';
export const ADD_START = '[Member] Add Start';
export const ADD_MEMBER = '[Member] Add Member to database';
export const ADD_SUCCESS = '[Member] Add Success';
export const ADD_CANCEL = '[Member] Add Cancel';
export const UPDATE_EMAIL = '[Member] Update email';
export const UPDATE_EMAIL_SUCCESS = '[Member] Update email success';
export const UPDATE_EMAIL_FAIL = '[Member] Update email fail';
export const RELOAD = '[Member] Reload';

export class Load implements Action {
  readonly type = LOAD;
}

export class LoadDetail implements Action {
  readonly type = LOAD_DETAIL;

  constructor(public payload: string) {}
}

export class LoadSuccess implements Action {
  readonly type = LOAD_SUCCESS;

  constructor(public payload: Member[]) {}
}

export class AddStart implements Action {
  readonly type = ADD_START;
}

export class AddSuccess implements Action {
  readonly type = ADD_SUCCESS;

  constructor(public payload?: MemberInfo) {}
}

export class AddMember implements Action {
  readonly type = ADD_MEMBER;

  constructor(public payload?: any) {}
}

export class AddCancel implements Action {
  readonly type = ADD_CANCEL;
}

export class Reload implements Action {
  readonly type = RELOAD;

  constructor(public payload?: Member[]) {}
}

export class UpdateEmail implements Action {
  readonly type = UPDATE_EMAIL;

  constructor(public payload: any) {}
}
export class UpdateEmailSuccess implements Action {
  readonly type = UPDATE_EMAIL_SUCCESS
}
export class UpdateEmailFail implements Action {
  readonly type = UPDATE_EMAIL_FAIL;

  constructor(public payload: string) {}
}

export type Actions =
  | Load
  | LoadDetail
  | LoadSuccess
  | AddSuccess
  | AddCancel
  | AddStart
  | AddMember
  | Reload
  | UpdateEmail
  | UpdateEmailSuccess
  | UpdateEmailFail;

