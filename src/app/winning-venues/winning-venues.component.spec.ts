import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinningVenuesComponent } from './winning-venues.component';

describe('WinningVenuesComponent', () => {
  let component: WinningVenuesComponent;
  let fixture: ComponentFixture<WinningVenuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinningVenuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinningVenuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
