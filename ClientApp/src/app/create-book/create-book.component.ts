import { Component, OnInit } from '@angular/core';
import {IBook} from '../common/interfaces/IBook';
import {BooksService} from '../common/services/books.service';
import {HttpErrorResponse} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {SetErrorAction} from '../common/redux/actions/error-action';
import {Store} from '@ngrx/store';
import {AppState} from '../common/redux/appState';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent  {

 private modelBook: IBook  = {   
    name: '',
    description: '',
    datePublish: new Date()
  };
  constructor(private _booksService: BooksService,  private _router: Router, private _store: Store<AppState>) {}




  changeDate(newDate) {

      const year = newDate.substr(0, 4);
      const month = newDate.substr(5, 2);
      const day = newDate.substr(8, 2);
      console.log(year, month, day);
     
      this.modelBook.datePublish = new Date(Date.UTC(year, parseInt(month) - 1, day));

  
  }
  createBook()
  {
    this._booksService.createBook( this.modelBook).subscribe(
      (response) => {
        this.processSuccess();
      },
      (errorResponse: HttpErrorResponse) => this.processError(errorResponse)
    );
  }

  processSuccess()
  {
    this._router.navigateByUrl('/');
  }

  processError(errorResponse: HttpErrorResponse)
  {
    this._store.dispatch(new SetErrorAction({title: 'Network error', description: errorResponse.message }));
  }

}
