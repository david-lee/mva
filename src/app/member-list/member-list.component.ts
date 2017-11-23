import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { ISubscription } from 'rxjs/Subscription';

import { MemberInfo } from '../member-detail/models/member-detail';
import { Member } from './models/member';
import * as MemberListAction from './actions/member-list';
import * as fromRoot from '../core/reducers';
import { DataTable } from 'primeng/primeng';
import { environment } from '../../environments/environment';
import {Message} from 'primeng/components/common/api';
import * as _ from 'lodash';

@Component({
  selector: 'mva-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.scss']
})
export class MemberListComponent implements OnInit, OnDestroy {

  @ViewChild('dt') dataTable;

  members: Member[];
  emailFilterChecked = true;
  emailClicked = false;
  emailErrorMessage: Message[] = [];
  subscriptions: ISubscription[] = [];
  newMember: Member;

  constructor(public store: Store<fromRoot.State>, public router: Router) { }

  ngOnInit() {
    this.subscriptions.push(
      this.store.select(fromRoot.getMemberList)
        .subscribe((members) => {
          this.members = members;
          // by default filter members who have an empty email
          this.emailFilterChecked = true;
          setTimeout(() => this.filterEmail(), 0);
        })
    );

    this.subscriptions.push(
      this.store.select(fromRoot.getNewMember)
        .subscribe((member: MemberInfo) => {
          this.newMember = member;
        })
    );

    this.store.dispatch(new MemberListAction.Load());
  }

  ngOnDestroy() {
    _.forEach(this.subscriptions, (subscription: ISubscription) => {
      subscription.unsubscribe();
    });
  }

  add() {
    this.store.dispatch(new MemberListAction.AddStart());
  }

  resetFilters() {
    this.dataTable.reset();
    this.emailFilterChecked = false;
  }

  refresh() {
    this.resetFilters();
    this.store.dispatch(new MemberListAction.Reload());
  }

  gotoDetail(event) {
    // because rowClick event is triggered on email column
    if (!this.emailClicked) {
      const member: Member = event.data;

      // console.log('selected row: ', event);
      this.store.dispatch(new MemberListAction.LoadDetail(member.id));
    }

    this.emailClicked = false;
  }

  isEmailEmpty(member: Member) {
    return !member.email || member.email.indexOf(environment.emptyEmailString) >= 0;
  }

  filterEmail() {
    const value = this.emailFilterChecked ? environment.emptyEmailString : '';
    this.dataTable.filter(value, 'email');
  }

  initEmailUpdate(member: Member) {
    this.emailClicked = true;

    if (member.email === environment.emptyEmailString) {
      member.email = '';
    }
  }

  validateEmail(email) {
    // tslint:disable-next-line:max-line-length
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(email);
  }

  updateEmail(member: Member) {
    const test = this.validateEmail(member.email);

    if (!test) {
      member.invalidEmail = true;
      this.emailErrorMessage = [];
      this.emailErrorMessage.push({
        severity: 'error', summary: 'Invalid Email', detail: `${member.id} has an invalid email`
      });
    } else {
      // TODO dispatch update action
      member.invalidEmail = false;
    }
  }

  cancelUpdateEmail(member: Member) {
    if (member.email === '') {
      member.email = environment.emptyEmailString;
    }
  }
}
