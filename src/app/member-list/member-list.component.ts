import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { ISubscription } from 'rxjs/Subscription';

import { Member } from './models/member';
import * as MemberListAction from './actions/member-list';
import * as fromRoot from '../core/reducers';
import { DataTable } from 'primeng/primeng'
import { environment } from '../../environments/environment';
import {Message} from 'primeng/components/common/api';

@Component({
  selector: 'mva-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.scss']
})
export class MemberListComponent implements OnInit {

  @ViewChild('dt') dataTable;

  members: Member[];
  emailFilterChecked = true;
  emailClicked = false;
  emailErrorMessage: Message[] = [];
  subscription: ISubscription;

  constructor(public store: Store<fromRoot.State>, public router: Router) { }

  ngOnInit() {
    this.subscription = this.store.select(fromRoot.getMemberList)
      .subscribe((members) => {
        this.members = members;
        // by default filter members who have an empty email
        this.emailFilterChecked = true;
        setTimeout(() => this.filterEmail(), 0);
      });

    this.store.dispatch(new MemberListAction.Load());
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  add() {

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
      let member: Member = event.data;

      console.log('selected row: ', event);
      this.store.dispatch(new MemberListAction.LoadDetail(member.id));
    }
    
    this.emailClicked = false;
  }

  isEmailEmpty(member: Member) {
    return member.email.indexOf(environment.emptyEmailString) >= 0;
  }

  filterEmail() {
    let value = this.emailFilterChecked ? environment.emptyEmailString : '';
    this.dataTable.filter(value, 'email');
  }

  initEmailUpdate(member: Member) {
    this.emailClicked = true;
    member.email == environment.emptyEmailString && (member.email = '');
  }

  validateEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(email);
  }

  updateEmail(member: Member) {
    let test = this.validateEmail(member.email);

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
    member.email == '' && (member.email = environment.emptyEmailString);
  }
}
