import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Effect, Actions } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';

import * as Auth from '../actions/auth';

@Injectable()
export class AuthEffects {

    @Effect({ dispatch: false })
    loginSuccess$ = this.actions$
        .ofType(Auth.LOGIN_SUCCESS)
        .do(() => this.router.navigate(['/members']));

    @Effect({ dispatch: false })
    loginRedirect$ = this.actions$
        .ofType(Auth.REDIRECT_TO_HOHE)
        .do(authed => this.router.navigate(['/']));

    constructor(
        private actions$: Actions,
        private router: Router
    ) {}

}
