import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindByCurrencyComponent } from './find-by-currency.component';

describe('FindByCurrencyComponent', () => {
  let component: FindByCurrencyComponent;
  let fixture: ComponentFixture<FindByCurrencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindByCurrencyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindByCurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
