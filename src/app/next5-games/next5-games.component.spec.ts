import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Next5GamesComponent } from './next5-games.component';

describe('Next5GamesComponent', () => {
  let component: Next5GamesComponent;
  let fixture: ComponentFixture<Next5GamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Next5GamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Next5GamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
