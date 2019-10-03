import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../core/store/state/app.state';
import { Subscription, timer } from 'rxjs';
import { Change, Reset } from '../../core/store/actions/app.actions';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit, OnDestroy {
  first$ = this.store.select('first');
  second$ = this.store.select('second');
  subscription: Subscription;

  constructor(
    private store: Store<AppState>
  ) {

  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.stop();
  }

  start() {
    this.stop();
    this.subscription = timer(0, 1000).subscribe(res => {
      this.store.dispatch(new Change());
    });
  }

  stop() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  reset() {
    this.store.dispatch(new Reset());
  }
}
