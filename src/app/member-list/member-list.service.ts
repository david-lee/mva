import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import { Member } from '../models/member';
import { MemberInfo } from '../models/member-info';
import { of } from 'rxjs/observable/of';

@Injectable()
export class MemberListService {

  api = environment.endPoints;

  constructor(public http: HttpClient) { }

  // loadMembers(): Observable<{data: Member[]}> {
  loadMembers(): Observable<Member[]> {    
    // return this.http.get<{data: Member[]}>(this.api.memberList);
    return this.http.get<Member[]>(this.api.memberList);
  }

  saveMember(member: MemberInfo): Observable<{data: MemberInfo}> {
    return of({ data: { ...member, id: '99999999' } });
  }

  // TODO id should be gone once API is changed
  updateEmail(email, id): Observable<any> {
    return this.http.post(this.api.updateEmail, {id: id, email: email});
  }
}
