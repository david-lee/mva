import * as AuthAction from '../actions/auth';
import {Message} from 'primeng/components/common/api';

export interface State {
  landId: string;
  isAuthed: boolean;
}

const initialState: State = {
  landId: null,
  isAuthed: false
};

export function reducer(state = initialState, action: AuthAction.Actions): State {
  switch (action.type) {
    case AuthAction.LOGIN_SUCCESS: {
      return {
        ...state,
        isAuthed: true,
        landId: action.payload
      }
    }

    default:
      return state;
  }
}

export const getLandId = (state: State) => state.landId;
export const getIsAuthed = (state: State) => state.isAuthed;
