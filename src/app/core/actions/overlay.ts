import { Action } from '@ngrx/store';

export const SHOW_BACKDROP = '[Overlay] Show Backdrop';
export const REMOVE_BACKDROP = '[Overlay] Remove Backdrop';
export const SHOW_MESSAGE = '[Overlay] Show message';

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

export type Actions = 
  ShowBackdrop | 
  RemoveBackdrop | 
  ShowMessage;
