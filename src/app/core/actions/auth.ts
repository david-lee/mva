import { Action } from '@ngrx/store';

export const LOGIN = '[MVAGlobal] Login';
export const LOGIN_SUCCESS = '[MVAGlobal] Login Success';
export const REDIRECT_TO_HOHE = '[MVAGlobal] Redirect to Login';

export class Login implements Action {
    readonly type = LOGIN;
}

export class LoginSuccess implements Action {
    readonly type = LOGIN_SUCCESS;

    constructor(public payload: string) {}
}

export class RedirectToHome implements Action {
    readonly type = REDIRECT_TO_HOHE;
}

export type Actions = 
    Login | 
    LoginSuccess |
    RedirectToHome;
