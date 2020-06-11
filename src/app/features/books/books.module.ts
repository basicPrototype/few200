import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books.component';
import { EntryComponent } from './entry/entry.component';
import { ListComponent } from './list/list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { featureName, reducers } from './reducers';



@NgModule({
  declarations: [BooksComponent, EntryComponent, ListComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature(featureName, reducers)
  ]
})
export class BooksModule { }
