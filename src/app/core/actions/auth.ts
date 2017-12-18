import { Action } from '@ngrx/store';

export const LOGIN = '[MVAGlobal] Login';
export const LOGIN_SUCCESS = '[MVAGlobal] Login Success';
export const REDIRECT_TO_HOHE = '[MVAGlobal] Redirect to Home';
export const REDIRECT_TO_NO_PERMISSION = '[MVAGlobal] Redirect to No permission';

export class Login implements Action {
    readonly type = LOGIN;
}

export class LoginSuccess implements Action {
    readonly type = LOGIN_SUCCESS;

    constructor(public payload: string[]) {}
}

export class RedirectToHome implements Action {
    readonly type = REDIRECT_TO_HOHE;
}

export class RedirectToNoPermission implements Action {
    readonly type = REDIRECT_TO_NO_PERMISSION;
}

export type Actions = 
    Login | 
    LoginSuccess |
    RedirectToHome |
    RedirectToNoPermission;
