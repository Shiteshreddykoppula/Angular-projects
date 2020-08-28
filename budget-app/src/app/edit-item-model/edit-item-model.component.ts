import { Component, OnInit,  inject, Inject } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item.model';
import { MatDialog, MatDialogRef, MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-item-model',
  templateUrl: './edit-item-model.component.html',
  styleUrls: ['./edit-item-model.component.scss']
})
export class EditItemModelComponent implements OnInit {

  // @Input() item: BudgetItem;
  constructor(
    public dialogRef: MatDialogRef<EditItemModelComponent>,
    @Inject(MAT_DIALOG_DATA) public item: BudgetItem
  ) { }

  ngOnInit(): void {
  }
  onSubmitted(UpdatedItem: BudgetItem){
    this.dialogRef.close(UpdatedItem);
  }

}
