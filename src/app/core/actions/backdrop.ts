import { Action } from '@ngrx/store';

export const SHOW_BACKDROP = '[Backdrop] Show Backdrop';
export const REMOVE_BACKDROP = '[Backdrop] Remove Backdrop';

export class ShowBackdrop implements Action {
  readonly type = SHOW_BACKDROP;

  constructor(public payload?: { showSpinner: boolean }) {}
}

export class RemoveBackdrop implements Action {
  readonly type = REMOVE_BACKDROP;
}

export type Actions = ShowBackdrop | RemoveBackdrop;
