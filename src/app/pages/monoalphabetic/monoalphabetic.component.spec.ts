import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonoalphabeticComponent } from './monoalphabetic.component';

describe('MonoalphabeticComponent', () => {
  let component: MonoalphabeticComponent;
  let fixture: ComponentFixture<MonoalphabeticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonoalphabeticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonoalphabeticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
