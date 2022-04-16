import { TestBed } from '@angular/core/testing';

import { PdfServiceService } from './pdf-service.service';
// describe the service class
describe('PdfServiceService', () => {
  let service: PdfServiceService;

  // loop thorugh them
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PdfServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
