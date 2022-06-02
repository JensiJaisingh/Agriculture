import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalktableComponent } from './talktable.component';

describe('TalktableComponent', () => {
  let component: TalktableComponent;
  let fixture: ComponentFixture<TalktableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TalktableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TalktableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
