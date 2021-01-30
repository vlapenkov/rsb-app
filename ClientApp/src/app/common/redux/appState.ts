import { ActionReducerMap } from '@ngrx/store';
import { errorReducer as error  } from './reducers/error-reducer';
import {IErrorWithState} from '../interfaces/IError';
export interface AppState {
  error: IErrorWithState;
}

const reducers: ActionReducerMap<AppState> = {
  error,
};

export { reducers };
