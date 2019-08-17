import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  categories =  [
    {id: 1, name: 'programming'},
    {id: 2, name: 'Designing'},
    {id: 3, name: 'Example'}
  ];
  constructor() { }

  ngOnInit() {
  }

  create(courseForm) {
    console.log(courseForm);
  }

}
