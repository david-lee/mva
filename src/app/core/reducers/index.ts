import { ActionReducerMap, createSelector, createFeatureSelector, ActionReducer, MetaReducer } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';
import { storeFreeze } from 'ngrx-store-freeze';
import { environment } from '../../../environments/environment';
import { RouterStateUrl } from '../custom-router-state-serializer';
import * as fromBackdrop from './backdrop';
import * as fromMember from '../../member-list/reducers/member-list';
import * as fromMemberDetail from '../../member-detail/reducers/member-detail';

// Root level state
export interface State {
  members: fromMember.State;
  memberDetail: fromMemberDetail.State;
  backdrop: fromBackdrop.State;
  // navbar: fromNavbar.State;
  routerReducer: fromRouter.RouterReducerState<RouterStateUrl>;
}

export const reducers: ActionReducerMap<State> = {
  members: fromMember.reducer,
  memberDetail: fromMemberDetail.reducer,
  backdrop: fromBackdrop.reducer,
  routerReducer: fromRouter.routerReducer
};

export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return function(state: State, action: any): State {
    return reducer(state, action);
  };
}

/**
 * By default, @ngrx/store uses combineReducers with the reducer map to compose
 * the root meta-reducer. To add more meta-reducers, provide an array of meta-reducers
 * that will be composed to form the root meta-reducer.
 */
export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [logger]
  : [];

// export const getLangState = createFeatureSelector<fromLang.State>('lang');
// export const getUserState = createFeatureSelector<fromAuth.State>('user');
export const getBackdropState = createFeatureSelector<fromBackdrop.State>('backdrop');
export const getMemberState = createFeatureSelector<fromMember.State>('members');
export const getMemberDetailState = createFeatureSelector<fromMemberDetail.State>('memberDetail');

export const getShowBackdrop = createSelector(
  getBackdropState,
  fromBackdrop.getShowBackdrop
);

export const getShowSpinner = createSelector(
  getBackdropState,
  fromBackdrop.getShowSpinner 
);

export const getMemberList = createSelector(
  getMemberState,
  fromMember.getMemberList
);

export const getMemberDetail = createSelector(
  getMemberDetailState,
  fromMemberDetail.getMemberDetail
);