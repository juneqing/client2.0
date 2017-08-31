import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeginnerPageComponent } from './beginner-page.component';

describe('BeginnerPageComponent', () => {
  let component: BeginnerPageComponent;
  let fixture: ComponentFixture<BeginnerPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeginnerPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeginnerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
