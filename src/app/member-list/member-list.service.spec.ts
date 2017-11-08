import { TestBed, inject } from '@angular/core/testing';

import { MemberListService } from './member-list.service';

describe('MemberListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MemberListService]
    });
  });

  it('should be created', inject([MemberListService], (service: MemberListService) => {
    expect(service).toBeTruthy();
  }));
});
