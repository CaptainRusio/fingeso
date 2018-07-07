import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateideaComponent } from './createidea.component';

describe('CreateideaComponent', () => {
  let component: CreateideaComponent;
  let fixture: ComponentFixture<CreateideaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateideaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateideaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
