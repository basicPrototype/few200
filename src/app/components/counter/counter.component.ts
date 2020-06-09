import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/reducers';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as actions from '../../actions/counter-actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  // current = 0;
  current$: Observable<number>;
  constructor(private store: Store<AppState>) { } // dependency injection

  ngOnInit(): void {
    this.current$ = this.store.select(s => s.counter.current);
  }

  increment() {
    // this.current += 1;
    // this.store.dispatch({ type: 'increment' });
    this.store.dispatch(actions.countIncremented());
  }

  decrement() {
    this.store.dispatch(actions.countDecremented());
  }

  reset() {
    this.store.dispatch(actions.countReset());
  }

}
