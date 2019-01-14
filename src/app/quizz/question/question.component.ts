import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  nextQuestionDisplay : Boolean = false;

  @Input() question : Object;
  @Input() answers : any;
  @Input() correctAnswer: String;

  @Output() nextEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  selectAnswer(answer: string, index: any){
    if (this.correctAnswer === answer){
      $('#answer'+index).prop('color', 'secondary');      
    } else {
      $('#answer'+index).prop('color', 'danger');
    }
    this.nextQuestionDisplay = true;
  }

  nextQuestion(){
    this.nextQuestionDisplay = false;
    this.nextEvent.emit();
  }
}
