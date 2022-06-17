import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalformComponent } from './rentalform.component';

describe('RentalformComponent', () => {
  let component: RentalformComponent;
  let fixture: ComponentFixture<RentalformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentalformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentalformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
