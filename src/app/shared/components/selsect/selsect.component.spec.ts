import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelsectComponent } from './selsect.component';

describe('SelsectComponent', () => {
  let component: SelsectComponent;
  let fixture: ComponentFixture<SelsectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelsectComponent]
    });
    fixture = TestBed.createComponent(SelsectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
