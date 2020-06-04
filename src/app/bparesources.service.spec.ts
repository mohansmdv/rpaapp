import { TestBed } from '@angular/core/testing';

import { BparesourcesService } from './bparesources.service';

describe('BparesourcesService', () => {
  let service: BparesourcesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BparesourcesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
