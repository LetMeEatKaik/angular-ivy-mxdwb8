import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScholarAPIComponent } from './scholar-api.component';

describe('ScholarAPIComponent', () => {
  let component: ScholarAPIComponent;
  let fixture: ComponentFixture<ScholarAPIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScholarAPIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScholarAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
