import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/do';

import { ShowBackdrop, RemoveBackdrop } from './actions/backdrop';
import * as fromRoot from './reducers';

@Injectable()
export class HttpServiceInterceptor implements HttpInterceptor {
  constructor(public store: Store<fromRoot.State>) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let customHeaders = {setHeaders: {}};

    if (['post', 'put', 'patch'].indexOf(req.method.toLowerCase()) >= 0) {
      customHeaders.setHeaders['Content-Type'] = 'application/json';
    }

    const customReq: HttpRequest<any> = req.clone(customHeaders);
    this.store.dispatch(new ShowBackdrop());

    return next.handle(customReq)
      .do(
        (event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            this.store.dispatch(new RemoveBackdrop());
          }          
        },
        (err: HttpErrorResponse) => {
          console.log(`Request Error for ${req.urlWithParams}`, err);
          if (err.status === 401) {
            // TODO show a popup or navigate to login page saving req.url
            console.log('Unauthorized.');
          }          
        }
    );
  }
}