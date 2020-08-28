import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BudgetitemlistComponent} from './budgetitemlist/budgetitemlist.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AddItemFormComponent } from './add-item-form/add-item-form.component';
import { BudgetitemcardComponent } from './budgetitemlist/budgetitemcard/budgetitemcard.component';
import {MatDialogModule, MatDialog} from '@angular/material/dialog';
import {FormsModule} from '@angular/forms'
import { from } from 'rxjs';
import { EditItemModelComponent } from './edit-item-model/edit-item-model.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    AddItemFormComponent,
    BudgetitemlistComponent,
    BudgetitemcardComponent,
    EditItemModelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [],
  entryComponents: [EditItemModelComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
