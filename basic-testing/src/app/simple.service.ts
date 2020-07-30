import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SimpleService {

  constructor() { }

  sayHello(name:string) : string {
    return `Hello ${name}`
  }

  sayHello2(name:string) : string {
    return `Howdy ${name}`
  }

  addNumbers(a:number, b:number) : Observable<number> {
    return of(a+b)
  }
}
