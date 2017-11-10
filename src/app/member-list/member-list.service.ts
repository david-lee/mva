import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import { Member } from './models/member';
import { of } from 'rxjs/observable/of';
import * as _ from 'lodash';

@Injectable()
export class MemberListService {

  api = environment.endPoints;

  members = [
    {
      id: "10000001",
      customerRole: "24-Insured",
      lastName: "Kunkel",
      firstName: "James",
      gender: "M",
      dob: "3/12/1985",
      email: "JamesKunkel@gmail.com"
    },
    {
      id: "10000002",
      customerRole: "24-Insured",
      lastName: "Cobblepot",
      firstName: "Oswald",
      middleName: "Paul",
      gender: "M",
      dob: "5/29/1986",
      email: ""
    },
    
    {
      id: "10000003",
      customerRole: "24-Insured",
      lastName: "TEST JHONNA D CHRI",
      firstName: "VITALITY",
      gender: "M",
      dob: "1/1/1990",
      email: ""
    },
    {
      id: "10000004",
      customerRole: "24-Insured",
      lastName: "TEST2",
      firstName: "CLIENT2N",
      gender: "F",
      dob: "11/3/1990",
      email: "Paul_f_lee@manulife.com"
    },
    {
      id: "10000005",
      customerRole: "24-Insured",
      lastName: "TESTNEW1",
      firstName: "CLIENTN",
      gender: "M",
      dob: "11/3/1955",
      email: ""
    },
    {
      id: "10000006",
      customerRole: "24-Insured",
      lastName: "test",
      firstName: "persona",
      gender: "M",
      dob: "1/23/1981",
      email: "shreya_singh@manulife.com"
    },
    {
      id: "10000007",
      customerRole: "24-Insured",
      lastName: "TEST",
      firstName: "INSSIXX",
      gender: "M",
      dob: "1/12/1990",
      email: ""
    },
    {
      id: "10000008",
      customerRole: "24-Insured",
      lastName: "TEST",
      firstName: "INSSIVN",
      gender: "M",
      dob: "3/12/1956",
      email: ""
    },
    {
      id: "10000009",
      customerRole: "24-Insured",
      lastName: "TEST",
      firstName: "INSSIXHT",
      gender: "M",
      dob: "3/26/1998",
      email: ""
    },
    {
      id: "10000010",
      customerRole: "24-Insured",
      lastName: "CTS",
      firstName: "ABC",
      gender: "F",
      dob: "5/29/1984",
      email: "abc@manulife.com"
    },
    {
      id: "10000011",
      customerRole: "24-Insured",
      lastName: "Lee",
      firstName: "Sion",
      gender: "M",
      dob: "12/29/1999",
      email: ""
    },
    {
      id: "10000012",
      customerRole: "24-Insured",
      lastName: "Lee",
      firstName: "Ju Eun",
      gender: "M",
      dob: "6/21/2001",
      email: "jueunlee@manulife.com"
    },
    {
      id: "10000013",
      customerRole: "24-Insured",
      lastName: "Lee",
      firstName: "Paul",
      gender: "M",
      dob: "6/12/1990",
      email: "Paul_f_lee@manulife.com"
    },
    {
      id: "10000014",
      customerRole: "24-Insured",
      lastName: "Lee",
      firstName: "Sion",
      gender: "M",
      dob: "12/29/1999",
      email: ""
    },
    {
      id: "10000015",
      customerRole: "24-Insured",
      lastName: "Lee",
      firstName: "Ju Eun",
      gender: "F",
      dob: "6/21/2001",
      email: "jueunlee@manulife.com"
    },
    {
      id: "10100016",
      customerRole: "24-Insured",
      lastName: "Lee",
      firstName: "Paul",
      gender: "M",
      dob: "6/12/1990",
      email: "Paul_f_lee@manulife.com"
    },
    {
      id: "10000017",
      customerRole: "24-Insured",
      lastName: "Lee",
      firstName: "Sion",
      gender: "M",
      dob: "12/29/1999",
      email: ""
    },
    {
      id: "10000018",
      customerRole: "24-Insured",
      lastName: "Lee",
      firstName: "Ju Eun",
      gender: "F",
      dob: "6/21/2001",
      email: "jueunlee@manulife.com"
    },
    {
      id: "10000019",
      customerRole: "24-Insured",
      lastName: "Lee",
      firstName: "Paul",
      gender: "M",
      dob: "6/12/1990",
      email: "Paul_f_lee@manulife.com"
    },
    {
      id: "10000020",
      customerRole: "24-Insured",
      lastName: "Seo",
      firstName: "Sion",
      gender: "M",
      dob: "12/29/1999",
      email: ""
    },
    {
      id: "10000021",
      customerRole: "24-Insured",
      lastName: "Lee",
      firstName: "Ju Eun",
      gender: "F",
      dob: "6/21/2001",
      email: "jueunlee@manulife.com"
    },
    {
      id: "10000022",
      customerRole: "24-Insured",
      lastName: "Park",
      firstName: "Paul",
      gender: "M",
      dob: "6/12/1990",
      email: "Paul_f_lee@manulife.com"
    },
    {
      id: "10000023",
      customerRole: "24-Insured",
      lastName: "Lee",
      firstName: "Sion",
      gender: "M",
      dob: "12/29/1999",
      email: ""
    },
    {
      id: "10000024",
      customerRole: "24-Insured",
      lastName: "Kim",
      firstName: "Ju Eun",
      gender: "F",
      dob: "6/21/2001",
      email: "jueunlee@manulife.com"
    },
    {
      id: "10000025",
      customerRole: "24-Insured",
      lastName: "Lee",
      firstName: "Paul",
      gender: "M",
      dob: "6/12/1990",
      email: "Paul_f_lee@manulife.com"
    },
    {
      id: "10000026",
      customerRole: "24-Insured",
      lastName: "Yoon",
      firstName: "Sion",
      gender: "M",
      dob: "12/29/1999",
      email: ""
    },
    {
      id: "10000027",
      customerRole: "24-Insured",
      lastName: "Lee",
      firstName: "Ju Eun",
      gender: "F",
      dob: "6/21/2001",
      email: "jueunlee@manulife.com"
    }                 
  ];
  constructor(public http: HttpClient) { }

  loadMembers(): Observable<{data: Member[]}> {
    return of({data: _.cloneDeep(this.members)});
    // return this.http.get<Member[]>(this.api.memberList);
  }
}
