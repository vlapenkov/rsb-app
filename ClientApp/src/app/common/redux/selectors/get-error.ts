import { AppState } from '../appstate';
import { createSelector } from '@ngrx/store';

export const selectErrorState = (state: AppState) => state.error;
export const getError = createSelector(
  selectErrorState,
  (error) => error
);
