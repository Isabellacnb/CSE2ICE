import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadtoheadGamesComponent } from './headtohead-games.component';

describe('HeadtoheadGamesComponent', () => {
  let component: HeadtoheadGamesComponent;
  let fixture: ComponentFixture<HeadtoheadGamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadtoheadGamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadtoheadGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
