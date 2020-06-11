import { Component, OnInit } from '@angular/core';
import { BookListItem } from '../models/book.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  books: BookListItem[] = [
    { id: '1', title: 'It', author: 'Stephen King', format: 'eBook' },
    { id: '2', title: 'Lonesome Dove', author: 'Larry McMurtry', format: 'Hardcover' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
