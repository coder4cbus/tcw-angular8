import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { GreetComponent } from './greet.component';
import { SimpleService } from '../simple.service';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('GreetComponent', () => {
  let component: GreetComponent;
  let fixture: ComponentFixture<GreetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreetComponent ],
      imports: [ FormsModule ],
      providers: [ SimpleService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should get greeting', () => {
    component.userName = "Daffy Duck"

    expect(component.getGreeting()).toBe("Hello Daffy Duck")
  });

  it('handle state change', () => {
    component.userName = "bob"

    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('p').textContent).toBe('Hello bob');

    expect(component.getGreeting()).toBe("Hello bob")
  });

  it('Adds numbers', () => {
    component.numberA = 10
    component.numberB = 20

    //Simulate Button CLick
    let button:DebugElement =
    fixture.debugElement.query(By.css("button"))

    button.triggerEventHandler("click", null)

    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('div').textContent).toBe('30');
  })

 /*  it('should create', () => {
    expect(component).toBeTruthy();
  }); */
});
