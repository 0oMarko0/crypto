import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextBlocComponent } from './text-bloc.component';

describe('TextBlocComponent', () => {
  let component: TextBlocComponent;
  let fixture: ComponentFixture<TextBlocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextBlocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextBlocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
