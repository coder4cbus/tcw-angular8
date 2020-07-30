import { TestBed } from '@angular/core/testing';

import { SimpleService } from './simple.service';

describe('SimpleService', () => {
  let service: SimpleService
  beforeEach(() => {
    service = TestBed.get(SimpleService)
  });

  it('should call sayHello', () => {
    let name = "bob"
    let greeting = service.sayHello(name)
    expect(greeting).toBe(`Hello ${name}`)
  });


  it('should add numbers', (done) => {
    service.addNumbers(3, 4).subscribe((result) => {
      expect(result).toBe(7)
      done()
    });
  })
});


    // const service: SimpleService = TestBed.get(SimpleService);
    // expect(service).toBeTruthy();


  //testing url
  //http://localhost:9876/?id=11493650
  //introduce testing error
/*  let greeting = service.sayHello(name)
//   expect(greeting).toBe(`Howdy! ${name}`)
//   }); */

