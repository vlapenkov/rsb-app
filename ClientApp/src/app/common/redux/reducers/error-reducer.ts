import {IError, IErrorWithState} from '../../interfaces/IError';
import {ErrorActionTypes, SetErrorAction} from '../actions/error-action';

const initialState: IErrorWithState = {
  title: null,
  description: null,
  isActive: false
};

/**
 * Редьюсер состояния ошибки
 * @param state
 * @param action
 */
export function errorReducer(
  state = initialState,
  action: SetErrorAction
): IErrorWithState {
  switch (action.type) {
    case ErrorActionTypes.SET: {
      return {...action.param, isActive : true} ;
    }
    case ErrorActionTypes.DISABLE: {
      return {...state, isActive : false};
    }
  default:
      return state;
  }
}
