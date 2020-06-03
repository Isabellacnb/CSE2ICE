import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AFLHomeComponent } from './aflhome.component';

describe('AFLHomeComponent', () => {
  let component: AFLHomeComponent;
  let fixture: ComponentFixture<AFLHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AFLHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AFLHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
