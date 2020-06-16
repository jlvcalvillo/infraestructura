import { TestBed } from '@angular/core/testing';

import { HypervisorService } from './hypervisor.service';

describe('HypervisorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HypervisorService = TestBed.get(HypervisorService);
    expect(service).toBeTruthy();
  });
});
