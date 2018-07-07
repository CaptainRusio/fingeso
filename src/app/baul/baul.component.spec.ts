import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaulComponent } from './baul.component';

describe('BaulComponent', () => {
  let component: BaulComponent;
  let fixture: ComponentFixture<BaulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
