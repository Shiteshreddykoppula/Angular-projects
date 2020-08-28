import { Component, OnInit } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item.model';
import { UpdateEvent } from '../budgetitemlist/budgetitemlist.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  budgetItems: BudgetItem[] = new Array<BudgetItem>();
  totalBudget: number=0;

  constructor() { }

  ngOnInit(): void {
  }

  addItem(newItem: BudgetItem){
    this.budgetItems.push(newItem);
    this.totalBudget+=newItem.amount;
  }
  deleteItem(item: BudgetItem){
    this.totalBudget-=item.amount;
    let index=this.budgetItems.indexOf(item);
    this.budgetItems.splice(index, 1);

  }
  UpdateItem(updateEvent:UpdateEvent){
            this.budgetItems[this.budgetItems.indexOf(updateEvent.old)]=updateEvent.new;  
            //update the totalbudget
            this.totalBudget-=updateEvent.old.amount;
            this.totalBudget+=updateEvent.new.amount;

  }
}
