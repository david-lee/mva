import { MemberDetail, MemberInfo, Biometrics, AuditLog } from '../models/member-detail';
import { environment } from '../../../environments/environment';
import * as MemberDetailAction from '../actions/member-detail';
import * as _ from 'lodash';
import * as moment from 'moment';

export interface State {
  memberInfo: MemberInfo | null;
  accounts: Account[];
  biometrics: Biometrics[];
  upsertMember: MemberInfo | null;
  upsertBio: Biometrics | null;
  auditLogs: AuditLog[] | null;
}

const initialState: State = {
  memberInfo: null,
  accounts: [],
  biometrics: [],  
  upsertMember: null,
  upsertBio: null,
  auditLogs: null
};

const dateFormat: string = environment.dateFormat;

export function reducer(state = initialState, action: MemberDetailAction.Actions): State {
  switch (action.type) {
    case MemberDetailAction.LOAD: {
      return {
        ...state
      };
    }

    case MemberDetailAction.LOAD_SUCCESS: {
      let memberDetail: MemberDetail = action.payload;

      return {
        ...state,
        memberInfo: memberDetail.memberInfo,
        accounts: memberDetail.accounts,
        biometrics: memberDetail.biometrics,
        upsertBio: null,
        upsertMember: null
      };
    }

    case MemberDetailAction.LOAD_AUDIT_LOG_SUCCESS: {
      return {
        ...state,
        auditLogs: action.payload
      }
    }

    case MemberDetailAction.CLOSE_AUDIT_LOG: {
      return {
        ...state,
        auditLogs: null
      }
    }    

    case MemberDetailAction.UPDATE_MEMBER: {
      let upsertMember: MemberInfo = { ...state.memberInfo };

      // calender componenet requires date type for value
      upsertMember.dob = new Date(<string>upsertMember.dob);
      upsertMember.vitalityEffdate = new Date(<string>upsertMember.vitalityEffdate);
      upsertMember.membershipEffdate = new Date(<string>upsertMember.membershipEffdate);

      return {
        ...state,
        upsertMember: upsertMember
      }
    }

    case MemberDetailAction.UPDATE_MEMBER_SUCCESS: {
      let member = action.payload;

      // convert date type to string with format
      member.dob = moment(member.dob).format(dateFormat);
      member.vitalityEffdate = moment(member.vitalityEffdate).format(dateFormat);
      member.membershipEffdate = moment(member.membershipEffdate).format(dateFormat);

      return {
        ...state,
        memberInfo: { ...member },
        upsertMember: null
      }
    }

    case MemberDetailAction.UPDATE_MEMBER_CANCEL: {
      return {
        ...state,
        upsertMember: null
      }
    }

    case MemberDetailAction.ADD_BIO_SUCCESS: {
      action.payload.assessmentDate = moment(action.payload.assessmentDate).format('DD/MMM/YYYY');

      return {
        ...state,
        biometrics: [ ...state.biometrics, action.payload ],
        upsertBio: null
      }
    }

    case MemberDetailAction.UPDATE_BIO: {
      let upsertBio: Biometrics = action.payload;

      return {
        ...state,
        upsertBio: { ...upsertBio }
      }
    }

    case MemberDetailAction.UPDATE_BIO_SUCCESS: {
      let idx = _.findIndex(state.biometrics, { id: action.payload.id });
      state.biometrics[idx] = action.payload;

      return {
        ...state,
        biometrics: [ ...state.biometrics ],
        upsertBio: null
      }
    }

    case MemberDetailAction.UPDATE_BIO_CANCEL: {
      return {
        ...state,
        upsertBio: null
      }
    }

    default: {
      return state;
    }
  }
}

export const getMemberInfo = (state: State) => state.memberInfo;
export const getAccounts = (state: State) => state.accounts;
export const getBiometrics = (state: State) => state.biometrics;
export const getUpsertMember = (state: State) => state.upsertMember;
export const getUpsertBio = (state: State) => state.upsertBio;
export const getAuditLogs = (state: State) => state.auditLogs;