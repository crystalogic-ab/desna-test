import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './core/store/state/app.state';
import { Reset } from './core/store/actions/app.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private store: Store<AppState>
  ) {

  }

  ngOnInit(): void {
    this.store.dispatch(new Reset());
  }
}
