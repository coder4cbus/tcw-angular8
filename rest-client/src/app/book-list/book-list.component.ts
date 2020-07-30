import { Component, OnInit } from '@angular/core';
import { DataService, Book } from '../data.service';

 

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})

export class BookListComponent implements OnInit {
  books:Book[] = []
  private page = 1; // Current Page. starts with 1
  private pageSize = 4;
  constructor(private dataService : DataService) { }

 
  ngOnInit() {
    this.dataService.getBooks().subscribe(bookList => {
      this.books = bookList;
    })
  }

  deleteBook(book: Book) {
    if (!window.confirm('Are you sure you want to delete this item?')) {
      return;
    }

    this.dataService.deleteBook(book.isbn).subscribe(_ => {
      //Delete local copy of the book
      this.books = this.books.filter(b => b.isbn !== book.isbn)
    },

    err => {
      alert(`${err} Oops in book-list.component.`)
    })
  }

  getDisplayList() : Book[] {
    return this.books.slice(
      (this.page - 1) * this.pageSize, this.page * this.pageSize)
  }
}
