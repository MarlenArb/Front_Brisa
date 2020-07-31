import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableBillReviewComponent } from './table-bill-review.component';

describe('TableBillReviewComponent', () => {
  let component: TableBillReviewComponent;
  let fixture: ComponentFixture<TableBillReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableBillReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableBillReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
