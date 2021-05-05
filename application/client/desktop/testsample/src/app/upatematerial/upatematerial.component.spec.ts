import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpatematerialComponent } from './upatematerial.component';

describe('UpatematerialComponent', () => {
  let component: UpatematerialComponent;
  let fixture: ComponentFixture<UpatematerialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpatematerialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpatematerialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});