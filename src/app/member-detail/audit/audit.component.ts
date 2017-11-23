import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { ISubscription } from 'rxjs/Subscription';

import { environment } from '../../../environments/environment';
import { AuditLog } from '../../member-detail/models/member-detail';
import * as moment from 'moment';
import * as MemberDetailAction from '../../member-detail/actions/member-detail';
import * as fromRoot from '../../core/reducers';

@Component({
  selector: 'audit-log',
  templateUrl: './audit.component.html',
  styleUrls: ['./audit.component.scss']
})
export class AuditComponent implements OnInit {

  _auditLogs: AuditLog[];
  // _memberId: string;

  @Input() set auditLogs(logs: AuditLog[]) {
    this._auditLogs = logs;
  }
  @Input() memberId: string;

  get auditLogs() {
    return this._auditLogs;
  }

  // get memberId() {
  //   return this._memberId;
  // }

  constructor(public store: Store<fromRoot.State>) { }

  ngOnInit() {
  }

  close() {
    // TODO confirm dialog
    this.store.dispatch(new MemberDetailAction.CloseAuditLog());
  }
}
