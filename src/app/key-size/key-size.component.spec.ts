import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeySizeComponent } from './key-size.component';

describe('KeySizeComponent', () => {
  let component: KeySizeComponent;
  let fixture: ComponentFixture<KeySizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeySizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeySizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
