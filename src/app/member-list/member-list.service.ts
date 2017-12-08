import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import { Member } from '../models/member';
import { MemberInfo } from '../models/member-info';
import { of } from 'rxjs/observable/of';
import * as moment from '../../../node_modules/moment/moment.js';
import * as _ from 'lodash';

@Injectable()
export class MemberListService {

  api = environment.endPoints;

  constructor(public http: HttpClient) { }

  loadMembers(): Observable<Member[]> {    
    return this.http.get<Member[]>(this.api.memberList);
  }

  saveMember(member: MemberInfo): Observable<any> {
    return this.http.post<any>(`${this.api.member}`, _.omit(member, [
      'id', 'lastUpdateDate', 'establishedOnC360','employerBranchId',
      'vitalityTermdate','accountStrategy','altMemberId'
    ]));
  }

  updateEmail(email, id): Observable<any> {
    return this.http.put(`${this.api.member}/${id}`, {email: email});
  }
}
