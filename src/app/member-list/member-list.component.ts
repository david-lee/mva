import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Member } from './models/member';
import * as MemberListAction from './actions/member-list';
import * as fromRoot from '../core/reducers';
import { DataTable } from 'primeng/primeng'

@Component({
  selector: 'mva-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.scss']
})
export class MemberListComponent implements OnInit {

  members$: Observable<Member[]>;

  constructor(public store: Store<fromRoot.State>, public router: Router) { }

  ngOnInit() {
    this.members$ = this.store.select(fromRoot.getMemberList);
    this.store.dispatch(new MemberListAction.Load());
  }

  add() {

  }

  resetFilters(dt: DataTable) {
    dt.reset();
  }

  refresh(dt: DataTable) {
    this.resetFilters(dt);
    this.store.dispatch(new MemberListAction.Reload());
  }

  gotoDetail(member: Member) {
    console.log('selected row: ', member);
    // this.router.navigate();
  }

  isEmailEmpty(member: Member) {
    return !member.email;
  }

}
