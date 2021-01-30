import { Action } from '@ngrx/store';
import {IError} from '../../interfaces/IError';
export enum ErrorActionTypes {
  SET = '[Error] SET new error',
  DISABLE = '[Error] Disable error'
}

export class SetErrorAction implements Action {
  type = ErrorActionTypes.SET;
   constructor(public param: IError) {}
}

export class DisableErrorAction implements Action {
  type = ErrorActionTypes.DISABLE;
}
