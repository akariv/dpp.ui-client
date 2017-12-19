import { TestBed, inject } from '@angular/core/testing';

import { ExecutionSupervisorService } from './execution-supervisor.service';

describe('ExecutionSupervisorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExecutionSupervisorService]
    });
  });

  it('should be created', inject([ExecutionSupervisorService], (service: ExecutionSupervisorService) => {
    expect(service).toBeTruthy();
  }));
});
