import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindByCapitalComponent } from './find-by-capital.component';

describe('FindByCapitalComponent', () => {
  let component: FindByCapitalComponent;
  let fixture: ComponentFixture<FindByCapitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindByCapitalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindByCapitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
