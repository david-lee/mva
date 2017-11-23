import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import { MemberDetail } from './models/member-detail';
import { of } from 'rxjs/observable/of';

@Injectable()
export class MemberDetailService {

  api = environment.endPoints;

  memberDetail = {
    memberInfo: {
      id: '10000001',
      customerRole: '98-Promo',
      lastName: 'Kunkel',
      firstName: 'James',
      middleName: 'Paul',
      gender: 'Male',
      dob: '3/Dec/1985',
      email: 'JamesKunkel@gmail.com',
      lastUpdateDate: '',
      lastUpdateUser: 'Admin',
      membershipStatus: '1-Active',
      membershipEffdate: '10/Dec/2015',
      address1: '4 Woolenscote Circle',
      address2: 'PO Box 12345',
      city: 'Etobicoke',
      province: 'ON',
      country: 'CA',
      postalCode: 'M9V4R7',
      vitalityProdcode: '12',
      vitalityProdcodeEffdate: '1/Mar/2016',
      employerExternalId: 'MANULIFE',
      employerBranchId: '',
      relationshipCode: 'PP',
      sin: '123456789',
      vitalityEffdate: '11/Dec/2015',
      vitalityTermdate: '',
      language: 'English',
      accountStrategy: '',
      altMemberId: '1234567001',
      sourceSystem: 'TestLocal',
      establishedOnC360: true
    },
    accounts: [{
      id: '111111',
      accountNumber: '1666100001',
      product: 'Very very long product name in manulife vitality products Why should it be such a long name',
      plan: 'Very very long plan name in manulife vitality plans Why should it be such a long name',
      amount: '555000',
      effectiveDate: '1/Jan/2016',
      terminationDate: '15/Jan/2016',
      status: '00',
      lastUpdateDate: '',
      lastUpdateUser: 'Admin'
    },
    {
      id: '222222',
      accountNumber: '1666100022',
      product: 'Very very long product name in manulife vitality products Why should it be such a long name',
      plan: 'Very very long plan name in manulife vitality plans Why should it be such a long name',
      amount: '333000',
      effectiveDate: '1/Jan/2016',
      terminationDate: '15/Jan/2016',
      status: '00',
      lastUpdateDate: '',
      lastUpdateUser: 'Admin'
    }],
    biometrics: [{
      id: '11111',
      assessmentDate: '15/Dec/2015',
      sentToTvg: '13/Feb/2016',
      glu: '123450',
      ht: '71.500',
      wght: '90'
    },
    {
      id: '22222',
      assessmentDate: '1/Jun/2015',
      sentToTvg: '3/Mar/2016',
      glu: '333450',
      ht: '91.500',
      wght: '50'
    }]
  };
  constructor(public http: HttpClient) { }

  loadMemberDetail(memberId: string): Observable<{data: MemberDetail}> {
    return of({data: this.memberDetail});
    // return this.http.get<Member[]>(this.api.memberList);
  }
}
