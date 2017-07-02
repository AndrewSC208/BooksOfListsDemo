import { TestBed, inject } from '@angular/core/testing';

import { VerticalService } from './vertical.service';

describe('VerticalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VerticalService]
    });
  });

  it('should be created', inject([VerticalService], (service: VerticalService) => {
    expect(service).toBeTruthy();
  }));
});
