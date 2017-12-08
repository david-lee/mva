import * as Overlay from '../actions/overlay';
import {Message} from 'primeng/components/common/api';

export interface State {
  showBackdrop: boolean;
  showSpinner: boolean;
  messages: Message[];
  isAuthed: boolean;
}

const initialState: State = {
  showBackdrop: false,
  showSpinner: true,
  messages: null,
  isAuthed: false
};

export function reducer(state = initialState, action: Overlay.Actions): State {
  switch (action.type) {
    case Overlay.SHOW_BACKDROP:
      return {
        ...state,
        showBackdrop: true,
        showSpinner: action.payload ? action.payload.showSpinner : state.showSpinner
      };

    case Overlay.REMOVE_BACKDROP:
      return {
        ...state,
        showBackdrop: false,
        showSpinner: true,
        messages: state.messages
      };

    case Overlay.SHOW_MESSAGE: {
        let errorMessage = [{severity: 'error', summary: 'Error', detail: action.payload}];
  
        return {
          ...state,
          messages: errorMessage
        }
      }
    
    case Overlay.LOGIN_SUCCESS: {
      return {
        ...state,
        isAuthed: true
      }
    }

    default:
      return state;
  }
}

export const getShowBackdrop = (state: State) => state.showBackdrop;
export const getShowSpinner = (state: State) => state.showSpinner;
export const getMessages = (state: State) => state.messages;
export const getIsAuthed = (state: State) => state.isAuthed;
