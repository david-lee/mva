import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import { MemberDetail } from './models/member-detail';
import { of } from 'rxjs/observable/of';

@Injectable()
export class MemberDetailService {

  api = environment.endPoints;

  member = {
    id: "10000001",
    customerRole: "24-Insured",
    lastName: "Lee",
    firstName: "David",
    gender: "Male",
    dob: "6/12/1971",
    email: "david_f_lee@manulife.com",
    lastUpdateDate: '',
    lastUpdateUser: 'Admin',
    membershipStatus: '1-Active',
    membershipEffdate: '',
    address1: '4 Woolenscote Circle',
    address2: 'M9V4R7',
    city: 'Etobicoke',
    province: 'ON',
    country: 'CA',
    postalCode: 'M9V4R7',
    vitalityProdcode: '',
    vitalityProdcodeEffdate: '',
    employerExternalId: '',
    employerBranchId: '',
    relationshipCode: 'PP',
    sin: '123 456 789',
    vitalityEffdate: '',
    vitalityTermdate: '',
    language: 'EN',
    accountStrategy: '',
    altMemberId: '1234567001',
    sourceSystem: 'TestLocal',
  };
  constructor(public http: HttpClient) { }

  loadMember(): Observable<{data: MemberDetail}> {
    return of({data: this.member});
    // return this.http.get<Member[]>(this.api.memberList);
  }
}
