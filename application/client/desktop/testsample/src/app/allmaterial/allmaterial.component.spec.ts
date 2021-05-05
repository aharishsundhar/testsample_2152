import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllmaterialComponent } from './allmaterial.component';

describe('AllmaterialComponent', () => {
  let component: AllmaterialComponent;
  let fixture: ComponentFixture<AllmaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllmaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllmaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});