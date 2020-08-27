import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetitemcardComponent } from './budgetitemcard.component';

describe('BudgetitemcardComponent', () => {
  let component: BudgetitemcardComponent;
  let fixture: ComponentFixture<BudgetitemcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudgetitemcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetitemcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
