import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerSubscribeComponent } from './player-subscribe.component';

describe('PlayerSubscribeComponent', () => {
  let component: PlayerSubscribeComponent;
  let fixture: ComponentFixture<PlayerSubscribeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerSubscribeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerSubscribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
