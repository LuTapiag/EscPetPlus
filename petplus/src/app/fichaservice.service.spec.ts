import { TestBed } from '@angular/core/testing';

import { FichaserviceService } from './fichaservice.service';

describe('FichaserviceService', () => {
  let service: FichaserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FichaserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
