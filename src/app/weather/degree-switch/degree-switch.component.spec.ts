import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DegreeSwitchComponent } from './degree-switch.component';

describe('DegreeSwitchComponent', () => {
  let component: DegreeSwitchComponent;
  let fixture: ComponentFixture<DegreeSwitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DegreeSwitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DegreeSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
