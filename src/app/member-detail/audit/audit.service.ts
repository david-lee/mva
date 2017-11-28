import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';
import { AuditLog } from '../../models/member-detail';
import { of } from 'rxjs/observable/of';

@Injectable()
export class AuditService {

  api = environment.endPoints;

  constructor(public http: HttpClient) { }

  loadAuditLog(): Observable<AuditLog[]> {
    // return of({data: this.auditLog});
    return this.http.get<AuditLog[]>(this.api.auditLog);
  }
}
