import { TestBed, inject } from '@angular/core/testing';

import { FbProfileService } from './fb-profile.service';

describe('FbProfileService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FbProfileService]
    });
  });

  it('should be created', inject([FbProfileService], (service: FbProfileService) => {
    expect(service).toBeTruthy();
  }));
});
