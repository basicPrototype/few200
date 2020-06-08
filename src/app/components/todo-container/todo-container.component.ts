import { Component, OnInit } from '@angular/core';
import { TodoListItem } from 'src/app/models';
import { TodoDataService } from 'src/app/services/todo-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.css']
})
export class TodoContainerComponent implements OnInit {

  // the $ is convention only - indicates observable
  stuff$: Observable<TodoListItem[]>;
  constructor(private service: TodoDataService) { }

  ngOnInit(): void {
    // do stuff here you'd normally do in a constructor
    this.stuff$ = this.service.getItems();
  }

  addAnItem(description: string) {
    // array spread operator; this adds an element to the top of the list
    // this.stuff = [{ description, completed: false }, ...this.stuff];
    this.service.addItem(description);
  }
}
