import * as Backdrop from '../actions/backdrop';

export interface State {
  showBackdrop: boolean;
  showSpinner: boolean;
}

const initialState: State = {
  showBackdrop: false,
  showSpinner: true
};

export function reducer(state = initialState, action: Backdrop.Actions): State {
  switch (action.type) {
    case Backdrop.SHOW_BACKDROP:
      return {
        ...state,
        showBackdrop: true,
        showSpinner: action.payload ? action.payload.showSpinner : state.showSpinner
      };

    case Backdrop.REMOVE_BACKDROP:
      return {
        ...initialState
      };

    default:
      return state;
  }
}

export const getShowBackdrop = (state: State) => state.showBackdrop;
export const getShowSpinner = (state: State) => state.showSpinner;
