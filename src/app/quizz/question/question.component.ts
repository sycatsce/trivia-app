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
  @Output() pointEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  selectAnswer(answer: string, index: any){
    //Check answer
    if (this.correctAnswer === answer){
      $('#answer'+index).prop('color', 'secondary');
      this.pointEvent.emit(true);
    } else {
      $('#answer'+index).prop('color', 'danger');
      this.pointEvent.emit(false);
    }

    //Color answers
    $('#answers-box').children().each( (id) => {
      $('#answer'+id).prop('disabled', 'true');
      if (this.correctAnswer !== $('#answer'+id).text().trim()){
        $('#answer'+id).prop('color', 'danger');
      } else {
        $('#answer'+id).prop('color', 'secondary');
      }
    })

    this.nextQuestionDisplay = true;
  }

  nextQuestion(){
    this.nextQuestionDisplay = false;
    this.nextEvent.emit();
  }
}
