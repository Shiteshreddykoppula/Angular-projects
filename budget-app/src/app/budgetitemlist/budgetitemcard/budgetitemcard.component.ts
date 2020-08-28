import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item.model';

@Component({
  selector: 'app-budgetitemcard',
  templateUrl: './budgetitemcard.component.html',
  styleUrls: ['./budgetitemcard.component.scss']
})
export class BudgetitemcardComponent implements OnInit {
  @Input() item: BudgetItem;
  @Output() xButtonClick: EventEmitter<any> = new EventEmitter<any>();
  @Output() cardClick: EventEmitter<any> = new EventEmitter<any>();
  
  constructor() { }

  ngOnInit(): void {
  }
  onXButtonclick(){
    //here we want to emit an event
    this.xButtonClick.emit();
    }
  onCardClick(){
    this.cardClick.emit();
  }
}
