import * as MemberListAction from '../actions/member-list';
import { Member } from '../../models/member';
import { MemberInfo } from '../../models/member-info';
import * as _ from 'lodash';
import * as moment from 'moment';
import { environment } from '../../../environments/environment';

export interface State {
  memberList: Member[];
  newMember: MemberInfo;
  selectedMember: Member | null;
}

const initialState: State = {
  memberList: [],
  newMember: null,
  selectedMember: null,
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
      // TODO data should be formatted on the server side
      _.forEach(action.payload, (member) => {
        if (!member.email) {
          (member.email = environment.emptyEmailString);
        }
        member.gender = member.gender === 'M' ? 'Male' : 'Female';
      });

      return {
        ...state,
        memberList: [ ...action.payload ],
      };
    }

    case MemberListAction.ADD_START: {
      return {
        ...state,
        newMember: <any>{
          country: 'CA',
          languge: 'English',
          gender: 'Male',
          province: 'Alberta',
          membershipStatus: '1-Active',
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

    case MemberListAction.ADD_CANCEL: {
      return {
        ...state,
        newMember: null
      };
    }

    default: {
      return state;
    }
  }
}

export const getMemberList = (state: State) => state.memberList;
export const getNewMember = (state: State) => state.newMember;
