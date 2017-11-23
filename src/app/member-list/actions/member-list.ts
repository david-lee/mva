import { Action } from '@ngrx/store';
import { Member } from '../models/member';
import { MemberInfo } from '../../member-detail/models/member-info';

export const LOAD = '[Member] Load';
export const LOAD_SUCCESS = '[Member] Load Success';
export const LOAD_DETAIL = '[Member] Load Detail';
export const ADD_START = '[Member] Add Start';
export const SAVE_MEMBER = '[Member] Save Member';
export const ADD_SUCCESS = '[Member] Add Success';
export const ADD_CANCEL = '[Member] Add Cancel';
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

export class SaveMember implements Action {
  readonly type = SAVE_MEMBER;

  constructor(public payload?: MemberInfo) {}
}

export class AddCancel implements Action {
  readonly type = ADD_CANCEL;
}

export class Reload implements Action {
  readonly type = RELOAD;

  constructor(public payload?: Member[]) {}
}

export type Actions =
  | Load
  | LoadDetail
  | LoadSuccess
  | AddSuccess
  | AddCancel
  | AddStart
  | SaveMember
  | Reload;
