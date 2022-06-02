import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrimbleXfillComponent } from './trimble-xfill.component';

describe('TrimbleXfillComponent', () => {
  let component: TrimbleXfillComponent;
  let fixture: ComponentFixture<TrimbleXfillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrimbleXfillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrimbleXfillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
