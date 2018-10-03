import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexCoincidenceComponent } from './index-coincidence.component';

describe('IndexCoincidenceComponent', () => {
  let component: IndexCoincidenceComponent;
  let fixture: ComponentFixture<IndexCoincidenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexCoincidenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexCoincidenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
