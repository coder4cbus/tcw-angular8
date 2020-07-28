import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-html-editor',
  templateUrl: './html-editor.component.html',
  styleUrls: ['./html-editor.component.css']
})
export class HtmlEditorComponent implements OnInit {
  userInput = "Enter HTML here"
  updateHTML(newValue: any): void {

  console.log('HTML updated: %s', newValue)

  this.userInput = newValue;

  }

  constructor() { }

  ngOnInit() {
  }

}
