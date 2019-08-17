import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent implements OnInit {


  form = new FormGroup({
    topics: new FormArray([])
  });

  constructor() { }

  ngOnInit() {
  }

  addTopic(topic: HTMLInputElement) {
    this.topiccs.push(new FormControl(topic.value));
    topic.value  = '';
  }

  removeTopic(topic: FormControl) {
    const index = this.topiccs.controls.indexOf(topic);
    this.topiccs.removeAt(index);
  }

  get topiccs() {
    return this.form.get('topics') as FormArray;
  }

}
