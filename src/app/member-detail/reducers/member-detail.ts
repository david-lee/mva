import { MemberDetail, MemberInfo, Biometrics, AuditLog } from '../../models/member-detail';
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

function formatDate(dt) {
  // in Date, month starts with 0 so as to calculate properly needs to convert to MMM format
  return new Date(moment(dt, environment.serverDateFormat).format('YYYY-MMM-DD'));
}

export function reducer(state = initialState, action: MemberDetailAction.Actions): State {
  switch (action.type) {
    case MemberDetailAction.LOAD:
    case MemberDetailAction.LOAD_AUDIT_LOG: {
      return {
        ...state
    };
    }

    case MemberDetailAction.LOAD_SUCCESS: {
      const memberDetail: MemberDetail = action.payload;

      return {
        ...state,
        memberInfo: memberDetail.memberInfo,
        accounts: <any>memberDetail.accounts,
        biometrics: memberDetail.biometrics,
        upsertBio: null,
        upsertMember: null,
        auditLogs: null
      };
    }

    case MemberDetailAction.LOAD_AUDIT_LOG_SUCCESS: {
      return {
        ...state,
        auditLogs: action.payload
      };
    }

    case MemberDetailAction.CLOSE_AUDIT_LOG: {
      return {
        ...state,
        auditLogs: null
      };
    }

    case MemberDetailAction.UPDATE_MEMBER_START: {
      const upsertMember: MemberInfo = { ...state.memberInfo };

      // calender componenet requires date type for value
      upsertMember.birthDate = formatDate(upsertMember.birthDate);
      upsertMember.vitalityEffdate = formatDate(upsertMember.vitalityEffdate);
      upsertMember.membershipEffdate = formatDate(upsertMember.membershipEffdate);

      return {
        ...state,
        upsertMember: upsertMember
      };
    }

    case MemberDetailAction.UPDATE_MEMBER_SUCCESS: {
      const member = action.payload;

      return {
        ...state,
        memberInfo: { ...member },
        upsertMember: null
      };
    }

    case MemberDetailAction.UPDATE_MEMBER_CANCEL: {
      return {
        ...state,
        upsertMember: null
      };
    }

    case MemberDetailAction.ADD_BIO_SUCCESS: {
      action.payload.id = '999999';
      action.payload.assessmentDate = moment(action.payload.assessmentDate).format(environment.dateFormat);

      return {
        ...state,
        biometrics: [ ...state.biometrics, action.payload ],
        upsertBio: null
      };
    }

    case MemberDetailAction.UPDATE_BIO: {
      const upsertBio: Biometrics = action.payload;

      return {
        ...state,
        upsertBio: { ...upsertBio }
      };
    }

    case MemberDetailAction.UPDATE_BIO_SUCCESS: {
      const idx = _.findIndex(state.biometrics, { id: action.payload.id });
      state.biometrics[idx] = action.payload;

      return {
        ...state,
        biometrics: [ ...state.biometrics ],
        upsertBio: null
      };
    }

    case MemberDetailAction.UPDATE_BIO_CANCEL: {
      return {
        ...state,
        upsertBio: null
      };
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
