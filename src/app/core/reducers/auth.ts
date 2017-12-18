import {Message} from 'primeng/components/common/api';
import * as AuthAction from '../actions/auth';
import * as _ from 'lodash'

export interface State {
  landId: string;
  isAuthed: boolean;
  role: string;
}

const initialState: State = {
  landId: null,
  isAuthed: false,
  role: ''
};

export function reducer(state = initialState, action: AuthAction.Actions): State {
  switch (action.type) {
    case AuthAction.LOGIN_SUCCESS: {
      let role;

      if (!action.payload.length) {
        role = '';
      } else {
        role = _.findIndex(action.payload, (role: string) => {
          let r = role.toLowerCase(); 
          console.log('--> ', r);
          return (r == 'caneditpromo' || r == 'admin');
        }) >= 0 ? 'promo' : 'data'
      }

      return {
        ...state,
        isAuthed: true,
        role: role
      }
    }

    default:
      return state;
  }
}

export const getLandId = (state: State) => state.landId;
export const getIsAuthed = (state: State) => state.isAuthed;
export const getRole = (state: State) => state.role;
