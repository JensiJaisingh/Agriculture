import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalcardComponent } from './rentalcard.component';

describe('RentalcardComponent', () => {
  let component: RentalcardComponent;
  let fixture: ComponentFixture<RentalcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentalcardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentalcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
