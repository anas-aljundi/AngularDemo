import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent implements OnInit {
  isExpanded = true;
  @Input() title: string;
  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.isExpanded = !this.isExpanded;
  }

}
