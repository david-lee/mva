import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { ISubscription } from 'rxjs/Subscription';

import { environment } from '../../environments/environment';
import { MemberDetail } from '../models/member-detail';
import { MemberInfo } from '../models/member-info';
import { of } from 'rxjs/observable/of';
import * as fromAuth from '../core/reducers/auth';
import * as moment from 'moment';
import * as _ from 'lodash';
import { Biometrics } from '../models/biometrics';

@Injectable()
export class MemberDetailService {
  api = environment.endPoints;

  constructor(public http: HttpClient) { }

  loadMemberDetail(memberId: string): Observable<MemberDetail> {
    return this.http.get<MemberDetail>(`${this.api.member}/${memberId}`);
  }

  updateMember(member: MemberInfo, lanId: string): Observable<any> {
    let data = _.pick(member, ['firstName','lastName','middleName','birthDate','gender','sin','email', 'language',
      'address1','addres2','city','province','country','postalCode', 'vitalityEffdate','membershipEffdate','membershipStatus']);

    return this.http.put<any>(`${this.api.member}/${member.id}`, {...data, lastUpdateUser: lanId});
  }

  removeComma(val) {
    return +((''+val).replace(/,/g, ''));
  }

  getBioData(bio) {
    let data = _.pick(bio, ['assessmentDate','tc','hdl','ldl','tcHdlRatio','glu','bps','bpd','ht','wght','cotinineResult']);
    
    data.tc = data.tc && this.removeComma(data.tc);
    data.hdl = data.hdl && this.removeComma(data.hdl);
    data.ldl = data.ldl && this.removeComma(data.ldl);
    data.tcHdlRatio = data.tcHdlRatio && this.removeComma(data.tcHdlRatio);
    data.glu = data.glu && this.removeComma(data.glu);
    data.bps = data.bps && this.removeComma(data.bps);
    data.bpd = data.bpd && this.removeComma(data.bpd);
    data.ht = data.ht && this.removeComma(data.ht);
    data.wght = data.wght && this.removeComma(data.wght);

    return data;
  }

  addBiometrics(bio: Biometrics, memberId: string, lanId: string) {
    let data = this.getBioData(bio);

    return this.http.post<any>(`${this.api.member}/${memberId}/biometrics`, {...data, lastUpdateUser: lanId});    
  }

  updateBiometrics(bio: Biometrics, memberId: string, lanId: string) {
    let data = this.getBioData(bio);

    return this.http.put<any>(`${this.api.member}/${memberId}/biometrics/${bio.id}`, {...data, lastUpdateUser: lanId});
  }
}
