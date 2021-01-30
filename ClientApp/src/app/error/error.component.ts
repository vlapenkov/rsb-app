import {Component, Input, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {AppState} from '../common/redux/appState';
import {getError} from '../common/redux/selectors/get-error';
import {Observable} from 'rxjs';
import {IError} from '../common/interfaces/IError';
import {DisableErrorAction, SetErrorAction} from '../common/redux/actions/error-action';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  private error$: Observable<IError>;

  constructor(private _store: Store<AppState>) {
    this.error$ = this._store.pipe(select(getError));
  }

  ngOnInit() {
  }


  disableError() {
    this._store.dispatch(new DisableErrorAction());
  }
}
