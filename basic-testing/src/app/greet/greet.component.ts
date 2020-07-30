import { Component, OnInit } from '@angular/core';
import { SimpleService } from '../simple.service';

@Component({
  selector: 'app-greet',
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.css']
})
export class GreetComponent implements OnInit {
  userName:string = ""
  numberA = 0
  numberB = 0
  addResult = 0
  constructor(private service: SimpleService) { }
  getGreeting() : string {
    return this.service.sayHello(this.userName)
  }
  add() {
    this.service.addNumbers(this.numberA, this.numberB).subscribe((result) => this.addResult = result)
  }
  ngOnInit() {
  }

}
