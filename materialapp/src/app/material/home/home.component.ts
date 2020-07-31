import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  text: string = `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
  It has survived not only five centuries, but also the leap into electronic typesetting,
  remaining essentially unchanged.
  It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
  and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;

  wordCount: number;

  constructor() {
    this.wordCount = this.text.trim().split(/\s+/).length;
  }

  ngOnInit() {}

  onYes() { alert('Yes, I\'ll do it!!!'); }
  onNo() { alert('That\'s NOt Gonna Happen :P'); }

  onCountClick() {
    alert('There are ' + this.wordCount + ' words in this article"');
  }
}
