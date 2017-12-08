import { ActionReducerMap, createSelector, createFeatureSelector, ActionReducer, MetaReducer } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';
import { storeFreeze } from 'ngrx-store-freeze';
import { environment } from '../../../environments/environment';
import { RouterStateUrl } from '../custom-router-state-serializer';
import * as fromOverlay from './overlay';
import * as fromMember from '../../member-list/reducers/member-list';
import * as fromMemberDetail from '../../member-detail/reducers/member-detail';

// Root level state
export interface State {
  members: fromMember.State;
  memberDetail: fromMemberDetail.State;
  overlay: fromOverlay.State;
  routerReducer: fromRouter.RouterReducerState<RouterStateUrl>;
}

export const reducers: ActionReducerMap<State> = {
  members: fromMember.reducer,
  memberDetail: fromMemberDetail.reducer,
  overlay: fromOverlay.reducer,
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
export const getOverlayState = createFeatureSelector<fromOverlay.State>('overlay');
export const getMemberState = createFeatureSelector<fromMember.State>('members');
export const getMemberDetailState = createFeatureSelector<fromMemberDetail.State>('memberDetail');

export const getShowBackdrop = createSelector(
  getOverlayState,
  fromOverlay.getShowBackdrop
);

export const getShowSpinner = createSelector(
  getOverlayState,
  fromOverlay.getShowSpinner
);

export const getMessages = createSelector(
  getOverlayState,
  fromOverlay.getMessages
);

export const getIsAuthed = createSelector(
  getOverlayState,
  fromOverlay.getIsAuthed
);

export const getMemberList = createSelector(
  getMemberState,
  fromMember.getMemberList
);

export const getNewMember = createSelector(
  getMemberState,
  fromMember.getNewMember
);

export const getMemberError = createSelector(
  getMemberState,
  fromMember.getErrorMessage
);

export const getMemberDetailInfo = createSelector(
  getMemberDetailState,
  fromMemberDetail.getMemberInfo
);

export const getAccounts = createSelector(
  getMemberDetailState,
  fromMemberDetail.getAccounts
);

export const getBiometrics = createSelector(
  getMemberDetailState,
  fromMemberDetail.getBiometrics
);

export const getUpsertMember = createSelector(
  getMemberDetailState,
  fromMemberDetail.getUpsertMember
);

export const getUpsertBiometrics = createSelector(
  getMemberDetailState,
  fromMemberDetail.getUpsertBio
);

export const getAuditLogs = createSelector(
  getMemberDetailState,
  fromMemberDetail.getAuditLogs
);
