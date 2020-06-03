import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpponentGamesComponent } from './opponent-games.component';

describe('OpponentGamesComponent', () => {
  let component: OpponentGamesComponent;
  let fixture: ComponentFixture<OpponentGamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpponentGamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpponentGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
