import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResellerloginComponent } from './resellerlogin.component';

describe('ResellerloginComponent', () => {
  let component: ResellerloginComponent;
  let fixture: ComponentFixture<ResellerloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResellerloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResellerloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
