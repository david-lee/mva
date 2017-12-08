import { Action } from '@ngrx/store';

export const SHOW_BACKDROP = '[Overlay] Show Backdrop';
export const REMOVE_BACKDROP = '[Overlay] Remove Backdrop';
export const SHOW_MESSAGE = '[Overlay] Show message';
export const LOGIN = '[MVAGlobal] Login';
export const LOGIN_SUCCESS = '[MVAGlobal] Login Success';

export class ShowBackdrop implements Action {
  readonly type = SHOW_BACKDROP;

  constructor(public payload?: { showSpinner: boolean }) {}
}

export class RemoveBackdrop implements Action {
  readonly type = REMOVE_BACKDROP;
}

export class ShowMessage implements Action {
  readonly type = SHOW_MESSAGE;

  constructor(public payload: any) {}
}

export class Login implements Action {
  readonly type = LOGIN;
}

export class LoginSuccess implements Action {
  readonly type = LOGIN_SUCCESS;
}

export type Actions = 
  ShowBackdrop | 
  RemoveBackdrop | 
  ShowMessage | 
  Login | 
  LoginSuccess;
