import { TestBed, inject } from '@angular/core/testing';

import { ServerEventsService } from './server-events.service';

describe('ServerEventsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServerEventsService]
    });
  });

  it('should be created', inject([ServerEventsService], (service: ServerEventsService) => {
    expect(service).toBeTruthy();
  }));
});
