import { TestBed } from '@angular/core/testing';

import { SAService } from './s-a.service';

describe('SAService', () => {
  let service: SAService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SAService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
