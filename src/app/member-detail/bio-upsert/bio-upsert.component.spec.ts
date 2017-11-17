import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BioUpsertComponent } from './bio-upsert.component';

describe('BioUpsertComponent', () => {
  let component: BioUpsertComponent;
  let fixture: ComponentFixture<BioUpsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BioUpsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BioUpsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
