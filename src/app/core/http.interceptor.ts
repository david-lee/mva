import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/do';

import { ShowBackdrop, RemoveBackdrop, ShowMessage } from './actions/overlay';
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
            console.log('interceptor done...');
            this.store.dispatch(new RemoveBackdrop());
          }          
        },
        (err: HttpErrorResponse) => {
          if (err.status === 401) {
            console.log('Unauthorized.');
          }
          if (err.status >= 500 && err.status < 600) {
            console.log('Server Error.', err);
            this.store.dispatch(new ShowMessage(`Server Error: ${err.message}`));
          }

          this.store.dispatch(new RemoveBackdrop());
        }
      );
  }
}