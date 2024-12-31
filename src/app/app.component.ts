import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from './counter.action';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ngrx-store-app';
  count$!: Observable<number>;
  constructor(private store: Store<{ count: number }>) {
    // TODO: Connect `this.count$` stream to the current store `count` state
    this.count$ = store.select('count');
  }

  inc() {
    console.log('dispatch increment action');
    this.store.dispatch(increment());
  }
  dec() {
    console.log('dispatch decrement action');
    this.store.dispatch(decrement());
  }
  res() {
    this.store.dispatch(reset());
  }
}
