import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import { Member } from './models/member';
import { of } from 'rxjs/observable/of';

@Injectable()
export class MemberListService {

  api = environment.endPoints;

  members = [
    {
      id: "10000001",
      customerRole: "24-Insured",
      lastName: "Lee",
      firstName: "David",
      gender: "Male",
      dob: "6/12/1971",
      email: "david_f_lee@manulife.com"
    },
    {
      id: "10000002",
      customerRole: "24-Insured",
      lastName: "Lee",
      firstName: "Sion",
      gender: "Male",
      dob: "12/29/1999",
      email: "sionlee@manulife.com"
    },
    {
      id: "10000003",
      customerRole: "24-Insured",
      lastName: "Park",
      firstName: "Ju Eun",
      gender: "Female",
      dob: "6/21/2001",
      email: ""
    },
    {
      id: "10000004",
      customerRole: "24-Insured",
      lastName: "Hue",
      firstName: "David",
      gender: "Male",
      dob: "6/12/1971",
      email: "david_f_lee@manulife.com"
    },
    {
      id: "10000002",
      customerRole: "24-Insured",
      lastName: "Lee",
      firstName: "Sion",
      gender: "Male",
      dob: "12/29/1999",
      email: ""
    },
    {
      id: "10000003",
      customerRole: "24-Insured",
      lastName: "Lee",
      firstName: "Ju Eun",
      gender: "Female",
      dob: "6/21/2001",
      email: "jueunlee@manulife.com"
    },
    {
      id: "10000001",
      customerRole: "24-Insured",
      lastName: "Kim",
      firstName: "David",
      gender: "Male",
      dob: "6/12/1971",
      email: "david_f_lee@manulife.com"
    },
    {
      id: "10000102",
      customerRole: "24-Insured",
      lastName: "Lee",
      firstName: "Sion",
      gender: "Male",
      dob: "12/29/1999",
      email: ""
    },
    {
      id: "10000003",
      customerRole: "24-Insured",
      lastName: "Lee",
      firstName: "Ju Eun",
      gender: "Female",
      dob: "6/21/2001",
      email: "jueunlee@manulife.com"
    },
    {
      id: "10000011",
      customerRole: "24-Insured",
      lastName: "Lee",
      firstName: "David",
      gender: "Male",
      dob: "6/12/1971",
      email: "david_f_lee@manulife.com"
    },
    {
      id: "10000022",
      customerRole: "24-Insured",
      lastName: "Lee",
      firstName: "Sion",
      gender: "Male",
      dob: "12/29/1999",
      email: "sionlee@manulife.com"
    },
    {
      id: "10000003",
      customerRole: "24-Insured",
      lastName: "Lee",
      firstName: "Ju Eun",
      gender: "Female",
      dob: "6/21/2001",
      email: "jueunlee@manulife.com"
    },
    {
      id: "10000201",
      customerRole: "24-Insured",
      lastName: "Lee",
      firstName: "David",
      gender: "Male",
      dob: "6/12/1971",
      email: "david_f_lee@manulife.com"
    },
    {
      id: "10000002",
      customerRole: "24-Insured",
      lastName: "Lee",
      firstName: "Sion",
      gender: "Male",
      dob: "12/29/1999",
      email: "sionlee@manulife.com"
    },
    {
      id: "10000033",
      customerRole: "24-Insured",
      lastName: "Lee",
      firstName: "Ju Eun",
      gender: "Female",
      dob: "6/21/2001",
      email: "jueunlee@manulife.com"
    },
    {
      id: "10100001",
      customerRole: "24-Insured",
      lastName: "Lee",
      firstName: "David",
      gender: "Male",
      dob: "6/12/1971",
      email: "david_f_lee@manulife.com"
    },
    {
      id: "10000002",
      customerRole: "24-Insured",
      lastName: "Lee",
      firstName: "Sion",
      gender: "Male",
      dob: "12/29/1999",
      email: "sionlee@manulife.com"
    },
    {
      id: "10000003",
      customerRole: "24-Insured",
      lastName: "Lee",
      firstName: "Ju Eun",
      gender: "Female",
      dob: "6/21/2001",
      email: "jueunlee@manulife.com"
    },
    {
      id: "10000001",
      customerRole: "24-Insured",
      lastName: "Lee",
      firstName: "David",
      gender: "Male",
      dob: "6/12/1971",
      email: "david_f_lee@manulife.com"
    },
    {
      id: "10000002",
      customerRole: "24-Insured",
      lastName: "Seo",
      firstName: "Sion",
      gender: "Male",
      dob: "12/29/1999",
      email: "sionlee@manulife.com"
    },
    {
      id: "10000003",
      customerRole: "24-Insured",
      lastName: "Lee",
      firstName: "Ju Eun",
      gender: "Female",
      dob: "6/21/2001",
      email: "jueunlee@manulife.com"
    },
    {
      id: "10000001",
      customerRole: "24-Insured",
      lastName: "Park",
      firstName: "David",
      gender: "Male",
      dob: "6/12/1971",
      email: "david_f_lee@manulife.com"
    },
    {
      id: "10000002",
      customerRole: "24-Insured",
      lastName: "Lee",
      firstName: "Sion",
      gender: "Male",
      dob: "12/29/1999",
      email: "sionlee@manulife.com"
    },
    {
      id: "10000003",
      customerRole: "24-Insured",
      lastName: "Kim",
      firstName: "Ju Eun",
      gender: "Female",
      dob: "6/21/2001",
      email: "jueunlee@manulife.com"
    },
    {
      id: "10000001",
      customerRole: "24-Insured",
      lastName: "Lee",
      firstName: "David",
      gender: "Male",
      dob: "6/12/1971",
      email: "david_f_lee@manulife.com"
    },
    {
      id: "10000002",
      customerRole: "24-Insured",
      lastName: "Yoon",
      firstName: "Sion",
      gender: "Male",
      dob: "12/29/1999",
      email: "sionlee@manulife.com"
    },
    {
      id: "10000003",
      customerRole: "24-Insured",
      lastName: "Lee",
      firstName: "Ju Eun",
      gender: "Female",
      dob: "6/21/2001",
      email: "jueunlee@manulife.com"
    }                 
  ];
  constructor(public http: HttpClient) { }

  loadMembers(): Observable<{data: Member[]}> {
    return of({data: this.members});
    // return this.http.get<Member[]>(this.api.memberList);
  }
}
