import { TestBed } from '@angular/core/testing';

import { BeanServiceService } from './bean-service.service';

describe('BeanServiceService', () => {
  let service: BeanServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BeanServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
