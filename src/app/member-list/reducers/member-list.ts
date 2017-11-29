import * as MemberListAction from '../actions/member-list';
import { Member } from '../../models/member';
import { MemberInfo } from '../../models/member-info';
import * as _ from 'lodash';
import * as moment from 'moment';
import { environment } from '../../../environments/environment';
import {Message} from 'primeng/components/common/api';

export interface State {
  memberList: Member[];
  newMember: MemberInfo;
  errorMessage: Message[];
}

const initialState: State = {
  memberList: [],
  newMember: null,
  errorMessage: null
};

export function reducer(state = initialState, action: MemberListAction.Actions): State {
  switch (action.type) {
    case MemberListAction.LOAD:
    case MemberListAction.RELOAD: {
      return {
        ...state
      };
    }

    case MemberListAction.LOAD_SUCCESS: {
      _.forEach(action.payload, (member) => {
        if (!member.email) {
          (member.email = environment.emptyEmailString);
        }
      });

      return {
        ...state,
        memberList: [ ...action.payload ],
      };
    }

    // show a popup dialog
    case MemberListAction.ADD_START: {
      return {
        ...state,
        newMember: <any>{ // set default values
          country: 'CA',
          languge: 'English',
          gender: 'M',
          province: 'AB',
          membershipStatus: '1',
          membershipEffdate: moment(new Date()).format(environment.dateFormat),
          vitalityEffdate: moment(new Date()).format(environment.dateFormat)
        }
      };
    }

    case MemberListAction.ADD_SUCCESS: {
      // returned from the server after saving
      // all other data should be the same as what user entered
      state.newMember.id = action.payload.id;
      // state.newMember.vitalityEffdate = moment(state.newMember.vitalityEffdate, 'MM/DD/YYYY').format('DD/MMM/YYYY');

      return {
        ...state,
        memberList: [ state.newMember, ...state.memberList ],
        newMember: null
      };
    }

    // clsoe dialog
    case MemberListAction.ADD_CANCEL: {
      return {
        ...state,
        newMember: null
      };
    }

    case MemberListAction.UPDATE_EMAIL_FAIL: {
      let errorMessage = [{severity: 'error', summary: 'Email Error', detail: action.payload}];

      return {
        ...state,
        errorMessage: errorMessage
      }
    }

    default: {
      return state;
    }
  }
}

export const getMemberList = (state: State) => state.memberList;
export const getNewMember = (state: State) => state.newMember;
export const getErrorMessage = (state: State) => state.errorMessage;
