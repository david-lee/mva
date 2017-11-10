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

  memberDetail = {
    id: "10000001",
    customerRole: "24-Insured",
    lastName: 'Kunkel',
    firstName: 'James',
    middleName: 'Pau.',
    gender: "M",
    dob: "3/12/1985",
    email: "JamesKunkel@gmail.com",
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
    vitalityProdcode: '12',
    vitalityProdcodeEffdate: '1/Mar/2016',
    employerExternalId: 'MANULIFE',
    employerBranchId: '',
    relationshipCode: 'PP',
    sin: '123 456 789',
    vitalityEffdate: '',
    vitalityTermdate: '',
    language: 'EN',
    accountStrategy: '',
    altMemberId: '1234567001',
    sourceSystem: 'TestLocal',
    accountList: [{
      accountNumber: '1666100001',
      product: '208',
      plan: '208',
      amount: '555000',
      effective: '1/Jan/2016',
      terminated: '15/Jan/2016'
    }],
    biometricsList: [{
      assessed: '15/Dec/2015',
      sent: '3/Mar/2016'
    }]
  };
  constructor(public http: HttpClient) { }

  loadMemberDetail(memberId: string): Observable<{data: MemberDetail}> {
    console.log('member detail for ', memberId);
    return of({data: this.memberDetail});
    // return this.http.get<Member[]>(this.api.memberList);
  }
}
