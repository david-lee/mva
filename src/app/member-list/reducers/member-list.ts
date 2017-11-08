import * as MemberListAction from '../actions/member-list';
import { Member } from '../models/member';
import * as _ from 'lodash';

export interface State {
  memberList: Member[];
  selectedMemberId: number;
}

const initialState: State = {
  memberList: [],
  selectedMemberId: 0,
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
      let members = action.payload;
      // TODO if api returns with null or undefined then change to empty string
      // _.map(action.payload, (member) => {
      //   !member.email && (member.email = "");

      //   return member;
      // });

      return {
        ...state,
        memberList: [...members]
      };
    }

    default: {
      return state;
    }
  }
}

export const getMemberList = (state: State) => state.memberList;
