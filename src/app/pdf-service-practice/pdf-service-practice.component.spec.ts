import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfServicePracticeComponent } from './pdf-service-practice.component';

describe('PdfServicePracticeComponent', () => {
  let component: PdfServicePracticeComponent;
  let fixture: ComponentFixture<PdfServicePracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdfServicePracticeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfServicePracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
