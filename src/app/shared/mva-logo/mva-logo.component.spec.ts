import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MvaLogoComponent } from './mva-logo.component';

describe('MvaLogoComponent', () => {
  let component: MvaLogoComponent;
  let fixture: ComponentFixture<MvaLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MvaLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MvaLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
