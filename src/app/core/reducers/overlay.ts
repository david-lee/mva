import * as Overlay from '../actions/overlay';
import {Message} from 'primeng/components/common/api';

export interface State {
  showBackdrop: boolean;
  showSpinner: boolean;
  messages: Message[];
}

const initialState: State = {
  showBackdrop: false,
  showSpinner: true,
  messages: null
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

    default:
      return state;
  }
}

export const getShowBackdrop = (state: State) => state.showBackdrop;
export const getShowSpinner = (state: State) => state.showSpinner;
export const getMessages = (state: State) => state.messages;
