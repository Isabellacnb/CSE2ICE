import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipsTableComponent } from './tips-table.component';

describe('TipsTableComponent', () => {
  let component: TipsTableComponent;
  let fixture: ComponentFixture<TipsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
