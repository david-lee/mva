import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';
import { AuditLog } from '../models/member-detail';
import { of } from 'rxjs/observable/of';

@Injectable()
export class AuditService {

  api = environment.endPoints;

  auditLog: AuditLog[] = [
    {
      id: '1',
      auditTs: '2016-03-16T16:25:10',
      username: 'admin',
      tableName: 'member',
      fieldName: 'membership_status',
      newValue: '1',
      oldValue: '2'
    },
    {
      id: '2',
      auditTs: '2016-03-16T16:25:10',
      username: 'admin',
      tableName: 'member',
      fieldName: 'membership_effdate',
      newValue: '2016-03-16',
      oldValue: '2016-01-16'
    },
    {
      id: '3',
      auditTs: '2016-03-16T16:24:41',
      username: 'admin',
      tableName: 'biometrics',
      fieldName: 'sent_to_tvg',
      newValue: '2016-03-13',
      oldValue: '2016-03-01'
    },
    {
      id: '4',
      auditTs: '2016-03-16T16:21:57',
      username: 'admin',
      tableName: 'member',
      fieldName: 'SIN',
      newValue: '130692544',
      oldValue: '456123001'
    },
    {
      id: '5',
      auditTs: '2016-03-16T12:01:39',
      username: 'admin',
      tableName: 'biometrics',
      fieldName: 'GLU',
      newValue: '1234500',
      oldValue: '87654321.1234'
    },
    {
      id: '6',
      auditTs: '2016-03-16T11:25:10',
      username: 'admin',
      tableName: 'member',
      fieldName: 'membership_status',
      newValue: '1',
      oldValue: '2'
    },
    {
      id: '7',
      auditTs: '2016-03-16T06:25:10',
      username: 'admin',
      tableName: 'member',
      fieldName: 'membership_effdate',
      newValue: '2016-03-16',
      oldValue: '2016-01-16'
    },
    {
      id: '8',
      auditTs: '2016-03-15T11:24:41',
      username: 'admin',
      tableName: 'biometrics',
      fieldName: 'sent_to_tvg',
      newValue: '2016-03-13',
      oldValue: '2016-03-01'
    },
    {
      id: '9',
      auditTs: '2016-02-26T10:21:57',
      username: 'admin',
      tableName: 'member',
      fieldName: 'SIN',
      newValue: '130692544',
      oldValue: '456123001'
    },
    {
      id: '10',
      auditTs: '2016-02-16T16:01:39',
      username: 'admin',
      tableName: 'biometrics',
      fieldName: 'GLU',
      newValue: '1234500',
      oldValue: '87654321.1234'
    },
    {
      id: '11',
      auditTs: '2016-01-16T16:01:39',
      username: 'admin',
      tableName: 'biometrics',
      fieldName: 'GLU',
      newValue: '1234500',
      oldValue: '87654321.1234'
    },
    {
      id: '12',
      auditTs: '2016-01-11T16:01:39',
      username: 'admin',
      tableName: 'biometrics',
      fieldName: 'GLU',
      newValue: '1234500',
      oldValue: '87654321.1234'
    }
  ]

  constructor() { }

  loadAuditLog(): Observable<{data: AuditLog[]}> {
    return of({data: this.auditLog});
  }
}
