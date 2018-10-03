import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextDecryptionComponent } from './text-decryption.component';

describe('TextDecryptionComponent', () => {
  let component: TextDecryptionComponent;
  let fixture: ComponentFixture<TextDecryptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextDecryptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextDecryptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
