import { TestBed } from '@angular/core/testing';

import { VeXEService } from './veXE.service';

describe('StudentService', () => {
  let service: VeXEService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VeXEService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
