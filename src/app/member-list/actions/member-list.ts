import { Action } from '@ngrx/store';
import { Member } from '../models/member';

export const LOAD = '[Member] Load';
export const LOAD_SUCCESS = '[Member] Load Success';
export const LOAD_DETAIL = '[Member] Load Detail';
export const ADD = '[Member] Add';
export const ADD_SUCCESS = '[Member] Add Success';
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

export class Add implements Action {
  readonly type = ADD;

  constructor(public payload: Member) {}
}

export class AddSuccess implements Action {
  readonly type = ADD_SUCCESS;

  constructor(public payload?: Member) {}
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
  | Add
  | Reload
