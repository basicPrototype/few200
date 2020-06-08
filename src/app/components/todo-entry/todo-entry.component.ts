import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-entry',
  templateUrl: './todo-entry.component.html',
  styleUrls: ['./todo-entry.component.css']
})
export class TodoEntryComponent implements OnInit {

  @Output() itemAdded = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  addItem(what: HTMLInputElement) {
    console.log(what.value);
    // add it to list here
    this.itemAdded.emit(what.value); // tell parent you did this
    what.value = '';
    what.focus();  // puts the cursor 'back'
  }
}
