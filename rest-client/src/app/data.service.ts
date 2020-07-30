import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, tap, retryWhen, delay, scan } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})

export class DataService {
  bookCache : {[isbn: string]: Book} = { }
  constructor(private http: HttpClient) { }

  //Include Caching for Book Data
  getBook(isbn: string) : Observable<Book> {
    let cachedBook = this.bookCache[isbn]
    if (cachedBook !== undefined) {
      console.log("Got a cache hit!")
      return of(cachedBook)
    } else {
    return this.http.get<Book>(`/books/${isbn}`).pipe(tap(book => this.bookCache[isbn] = book),
    catchError(err => cachedBook ? of(cachedBook) : throwError(err))
    )}
  }
 
  // getBook(isbn: string) : Observable<Book> {
  //   return this.http.get<Book>(`/books/${isbn}`)
  // }

  saveBook(book : Book): Observable<any> {
    return this.http.put(`/books/${book.isbn}`, book).pipe(
      tap(_ => this.bookCache[book.isbn] = book)
        )
    }
/*   saveBook(book : Book) : Observable<any> {
    return this.http.put(`/books/${book.isbn}`, book)
  } */
  
  getBooks() : Observable<Book[]> {
    /*  let cachedBook = this.bookCache<Book[]>
      if (cachedBook !== undefined) {
        console.log("Got a cache hit!")
        return of(cacheBook)
      } else { */
      return this.http.get<Book[]>("/books").pipe(
        catchError((err:HttpErrorResponse) => {
          if (err.status == 0) {
            return throwError("getBooks: Oops! Please check your network connection and try again.")
          } else {
            return throwError("getBooks: Sorry there was a problem at the server level.")
          }
        })
      )
   }
 
  
/* getBooks() : Observable<Book[]> {
  return this.http.get<Book[]>("/books")
} */
deleteBook(isbn: string) : Observable<any> {
  return this.http.delete<Book>(`/books/${isbn}`).pipe(
    tap(_ => delete this.bookCache[isbn]),
      catchError((err:HttpErrorResponse) => {
      if (err.status == 0) {
        return throwError("Network connection issues... Please try again!")
      } else {
        return throwError("Server level Error Message.")
      }
    })
  )
}

  /* deleteBook(isbn: string) : Observable<any> {
    return this.http.delete<Book>(`/books/${isbn}`)
  } */

//Generate Error on Delete of Book
  /* deleteBook(book: Book) : Observable<any> {
    return this.http.delete<Book>(`/books/bad-url/${book.isbn}`).pipe(
      catchError((err:HttpErrorResponse) => {
        if (err.status == 0) {
          return throwError("Oops! Please check your network connection and try again.")
        } else {
          return throwError("Sorry there was a problem at the server level.")
        }
      })
    )
  }
 */

}
export class Book {
  isbn: string
  title: string
  price: number
}