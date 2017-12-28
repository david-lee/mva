import {Message} from 'primeng/components/common/api';
import * as AuthAction from '../actions/auth';
import * as _ from 'lodash'

export interface State {
  lanId: string;
  isAuthed: boolean;
  role: string;
}

const initialState: State = {
  lanId: null,
  isAuthed: false,
  role: ''
};

export function reducer(state = initialState, action: AuthAction.Actions): State {
  switch (action.type) {
    case AuthAction.LOGIN_SUCCESS: {
      let role;
      const permission = action.payload.permission;

      if (!permission.length) {
        role = '';
      } else {
        role = _.findIndex(permission, (role: string) => {
          let r = role.toLowerCase(); 
          return (r == 'caneditpromo' || r == 'admin');
        }) >= 0 ? 'promo' : 'data'
      }

      return {
        ...state,
        isAuthed: true,
        role: role,
        lanId: action.payload.lanId
      }
    }

    default:
      return state;
  }
}

export const getLanId = (state: State) => state.lanId;
export const getIsAuthed = (state: State) => state.isAuthed;
export const getRole = (state: State) => state.role;
