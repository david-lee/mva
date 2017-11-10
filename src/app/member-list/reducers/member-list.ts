import * as MemberListAction from '../actions/member-list';
import { Member } from '../models/member';
import * as _ from 'lodash';
import * as moment from 'moment';
import { environment } from '../../../environments/environment';

export interface State {
  memberList: Member[];
  selectedMember: Member | null;
}

const initialState: State = {
  memberList: [],
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
        !member.email && (member.email = environment.emptyEmailString);
        member.gender = member.gender == 'M' ? 'Male' : 'Female';
        member.dob = moment(member.dob, 'MM/DD/YYYY').format('DD/MMM/YYYY');
      });

      return {
        ...state,
        memberList: [...action.payload],
      };
    }

    default: {
      return state;
    }
  }
}

export const getMemberList = (state: State) => state.memberList;
