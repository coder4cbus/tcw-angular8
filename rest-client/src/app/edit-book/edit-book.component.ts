import { Component, OnInit } from '@angular/core';
import { DataService, Book} from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  book:Book
  // below var added to cause compilation errors for debugging
  badVar:number = "hello";
  constructor(private dataService: DataService, private activeRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      let isbn = params ['isbn']

      this.dataService.getBook(isbn).subscribe(book => {
      this.book=book
    })
  })
}
  updateBook() {
    this.dataService.saveBook(this.book).subscribe(_ => {
        //Go back to the home page
        this.router.navigate(['/'])
      })
  }

}
