import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-budgetitemcard',
  templateUrl: './budgetitemcard.component.html',
  styleUrls: ['./budgetitemcard.component.scss']
})
export class BudgetitemcardComponent implements OnInit {
  @Input() isIncome: boolean=true;
  constructor() { }

  ngOnInit(): void {
  }

}
