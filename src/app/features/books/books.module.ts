import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books.component';
import { EntryComponent } from './entry/entry.component';
import { ListComponent } from './list/list.component';



@NgModule({
  declarations: [BooksComponent, EntryComponent, ListComponent],
  imports: [
    CommonModule
  ]
})
export class BooksModule { }
