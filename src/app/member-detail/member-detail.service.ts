import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import { MemberDetail } from '../models/member-detail';
import { MemberInfo } from '../models/member-info';
import { of } from 'rxjs/observable/of';
import * as moment from 'moment';
import * as _ from 'lodash';

@Injectable()
export class MemberDetailService {
  api = environment.endPoints;

  constructor(public http: HttpClient) { }

  loadMemberDetail(memberId: string): Observable<MemberDetail> {
    return this.http.get<MemberDetail>(`${this.api.member}/${memberId}`);
  }

  updateMember(member: MemberInfo): Observable<any> {
    return this.http.put<any>(
      `${this.api.member}/${member.id}`, 
      _.pick(member, ['firstName','lastName','middleName','birthDate','gender','sin','email', 
        'language','address1','addres2','city','province','country','postalCode',
        'vitalityEffdate','membershipStatus'])
      );
  }
}
