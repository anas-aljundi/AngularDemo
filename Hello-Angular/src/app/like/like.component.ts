import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('likesCount') likesCount: number;
  // tslint:disable-next-line:no-input-rename
  @Input('isActive') isActive: boolean;

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.likesCount += (this.isActive) ? -1 : 1;
    this.isActive = !this.isActive;
  }

}
