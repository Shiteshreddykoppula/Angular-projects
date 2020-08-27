import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BudgetitemlistComponent} from './budgetitemlist/budgetitemlist.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AddItemFormComponent } from './add-item-form/add-item-form.component';
import { BudgetitemcardComponent } from './budgetitemlist/budgetitemcard/budgetitemcard.component';
import {FormsModule} from '@angular/forms'
import { from } from 'rxjs';
@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    AddItemFormComponent,
    BudgetitemlistComponent,
    BudgetitemcardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
