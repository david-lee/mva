import { Action } from '@ngrx/store';
import { MemberDetail, MemberInfo, Biometrics, AuditLog } from '../models/member-detail';

export const LOAD = '[MemberDetail] Load';
export const LOAD_SUCCESS = '[MemberDetail] Load Success';
export const LOAD_AUDIT_LOG = '[MemberDetail] Load Audit Log';
export const LOAD_AUDIT_LOG_SUCCESS = '[MemberDetail] Load Audit Log Success';
export const CLOSE_AUDIT_LOG = '[MemberDetail] Close Audit Log';
export const UPDATE_MEMBER = '[MemberDetail] Update Member';
export const UPDATE_MEMBER_SUCCESS = '[MemberDetail] Update Member Success';
export const UPDATE_MEMBER_CANCEL = '[MemberDetail] Update Member Cancel';
export const UPDATE_BIO = '[MemberDetail] Update Bio';
export const UPDATE_BIO_SUCCESS = '[MemberDetail] Update Bio Success';
export const UPDATE_BIO_CANCEL = '[MemberDetail] Update Bio Cancel';
export const ADD_BIO_SUCCESS = '[MemberDetail] Add Bio Success';

export class Load implements Action {
  readonly type = LOAD;

  constructor(public payload: string) {}
}

export class LoadAuditLog implements Action {
  readonly type = LOAD_AUDIT_LOG;
}

export class LoadSuccess implements Action {
  readonly type = LOAD_SUCCESS;

  constructor(public payload: MemberDetail) {}
}

export class LoadAuditLogSuccess implements Action {
  readonly type = LOAD_AUDIT_LOG_SUCCESS;

  constructor(public payload: AuditLog[]) {}
}

export class CloseAuditLog implements Action {
  readonly type = CLOSE_AUDIT_LOG;
}

export class UpdateMember implements Action {
  readonly type = UPDATE_MEMBER;
}

export class UpdateMemberSuccess implements Action {
  readonly type = UPDATE_MEMBER_SUCCESS;

  constructor(public payload?: MemberInfo) {}
}

export class UpdateMemberCancel implements Action {
  readonly type = UPDATE_MEMBER_CANCEL;
}

export class UpdateBio implements Action {
  readonly type = UPDATE_BIO;

  constructor(public payload: Biometrics) {}
}

export class UpdateBioSuccess implements Action {
  readonly type = UPDATE_BIO_SUCCESS;

  constructor(public payload?: Biometrics) {}
}

export class UpdateBioCancel implements Action {
  readonly type = UPDATE_BIO_CANCEL;
}

export class AddBioSuccess implements Action {
  readonly type = ADD_BIO_SUCCESS;

  constructor(public payload?: Biometrics) {}
}

export type Actions =
  | Load
  | LoadSuccess
  | LoadAuditLog
  | LoadAuditLogSuccess
  | CloseAuditLog
  | UpdateMemberSuccess
  | UpdateMemberCancel
  | UpdateMember
  | UpdateBioSuccess
  | UpdateBioCancel
  | UpdateBio  
  | AddBioSuccess
 