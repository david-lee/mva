import { MemberDetail } from '../models/member-detail';
import { environment } from '../../../environments/environment';
import * as MemberDetailAction from '../actions/member-detail';
import * as _ from 'lodash';
import * as moment from 'moment';

export interface State {
  memberDetail: MemberDetail | null;
}

const initialState: State = {
  memberDetail: null
};

export function reducer(state = initialState, action: MemberDetailAction.Actions): State {
  switch (action.type) {
    case MemberDetailAction.LOAD: {
      return {
        ...state
      };
    }

    case MemberDetailAction.LOAD_SUCCESS: {
      let member: MemberDetail = action.payload;

      return {
        ...state,
        memberDetail: member,
      };
    }

    default: {
      return state;
    }
  }
}

export const getMemberDetail = (state: State) => state.memberDetail;
