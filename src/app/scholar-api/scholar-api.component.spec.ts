import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScholarAPIComponent } from './scholar-api.component';

// this describes the compeonet 
describe('ScholarAPIComponent', () => {
  let component: ScholarAPIComponent;
  let fixture: ComponentFixture<ScholarAPIComponent>;

  // loop through async
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScholarAPIComponent],
    }).compileComponents();
  });

   // create the comoonent and test
  beforeEach(() => {
    fixture = TestBed.createComponent(ScholarAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
