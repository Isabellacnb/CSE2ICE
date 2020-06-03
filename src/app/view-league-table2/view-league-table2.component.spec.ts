import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLeagueTable2Component } from './view-league-table2.component';

describe('ViewLeagueTable2Component', () => {
  let component: ViewLeagueTable2Component;
  let fixture: ComponentFixture<ViewLeagueTable2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewLeagueTable2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewLeagueTable2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
