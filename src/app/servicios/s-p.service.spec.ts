import { TestBed } from '@angular/core/testing';

import { SPService } from './s-p.service';

describe('SPService', () => {
  let service: SPService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SPService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
