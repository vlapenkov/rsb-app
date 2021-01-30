import { Component, OnInit } from '@angular/core';
import {IBook} from '../common/interfaces/IBook';
import {BooksService} from '../common/services/books.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books$: Observable<IBook[]>;

  constructor(private _booksService: BooksService) {}
  ngOnInit(): void {
   this.books$ = this._booksService.getBooks();
  }

}
