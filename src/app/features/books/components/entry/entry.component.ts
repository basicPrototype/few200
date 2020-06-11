import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { BookState } from '../../reducers/books.reducer';
import { Store } from '@ngrx/store';
import { addBook } from '../../actions/books.actions';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  bookForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private store: Store<BookState>) { }

  ngOnInit(): void {
    this.bookForm = this.formBuilder.group(
      {
        title: '',
        author: '',
        format: ''
      }
    );
  }

  submit() {
    this.store.dispatch(addBook(this.bookForm.value));
  }

}
