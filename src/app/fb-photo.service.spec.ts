import { TestBed, inject } from '@angular/core/testing';

import { FbPhotoService } from './fb-photo.service';

describe('FbPhotoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FbPhotoService]
    });
  });

  it('should be created', inject([FbPhotoService], (service: FbPhotoService) => {
    expect(service).toBeTruthy();
  }));
});
