import { TestBed } from '@angular/core/testing';

import { FormErrorMessagesService } from './form-error-messages.service';

describe('FormErrorMessagesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormErrorMessagesService = TestBed.get(FormErrorMessagesService);
    expect(service).toBeTruthy();
  });
});
