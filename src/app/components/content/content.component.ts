import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  @Input() first$: Observable<number>;
  @Input() second$: Observable<number>;

  constructor() {
  }

  ngOnInit() {
  }
}
