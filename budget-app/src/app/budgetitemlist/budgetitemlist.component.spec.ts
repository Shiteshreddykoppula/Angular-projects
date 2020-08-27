import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetitemlistComponent } from './budgetitemlist.component';

describe('BudgetitemlistComponent', () => {
  let component: BudgetitemlistComponent;
  let fixture: ComponentFixture<BudgetitemlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudgetitemlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetitemlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
