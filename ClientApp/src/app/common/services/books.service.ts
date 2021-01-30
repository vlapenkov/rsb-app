import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IBook} from '../interfaces/IBook';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {


  constructor(@Inject('BASE_URL') private baseUrl: string, private http: HttpClient) { }

  public getBook(id: number): Observable<IBook> {
    return this.http.get<IBook>(`${this.baseUrl}api/books/${id}`);
  }

  public getBooks(): Observable<IBook[]> {
    return this.http.get<IBook[]>(`${this.baseUrl}api/books`);
  }

  public createBook(body: any) {
      return this.http.post<IBook>(`${this.baseUrl}api/books`, body );

  }
}
