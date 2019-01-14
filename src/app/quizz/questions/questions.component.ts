import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import QuestionsDatas from './questions.interface';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  @Input() difficulty: any;
  @Input() username: string;

  @Output() endGame = new EventEmitter();
  @Output() stopTimer = new EventEmitter();

  questions: any;
  question: any = "";
  cpt: any = 0;
  answers: Array<any> = [];
  correctAnswer: String = "";
  points: any = 0;
  timer: boolean = true;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any>('https://opentdb.com/api.php?amount=1&category=15&difficulty=' + this.difficulty + '&type=multiple').subscribe( (response) => {
      let questions : QuestionsDatas = response.results;
      this.question = questions[0];
      this.questions = questions;
      this.getAnswers(this.question);
    })
  }

  getAnswers(questionsArg: any){
    let answersList : Array<any> = [];
    
    this.correctAnswer = questionsArg.correct_answer;
    answersList.push(questionsArg.correct_answer);
    questionsArg.incorrect_answers.forEach(element => {
      answersList.push(element);
    });

    for (let i = answersList.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * (i + 1));
      [answersList[i], answersList[j]] = [answersList[j], answersList[i]];
    }

    switch(this.difficulty){
      case 'easy':
        this.difficulty = 5;
        break;
      case 'medium':
        this.difficulty = 10;
        break;
      case 'hard':
        this.difficulty = 20;
        break;
    }

    this.answers = answersList;
  }

  updateScore(data){
    if (data === true){
      this.points = this.points + this.difficulty;
    } else {
      this.points = this.points - this.difficulty;
    }
  }

  nextQuestion(){
    this.cpt = this.cpt + 1;

    if (this.cpt == 1){
      this.endQuizz();
      return;
    }

    this.question = this.questions[this.cpt];
    this.getAnswers(this.question);
  }

  endQuizz(){
    this.endGame.emit(this.points);
    this.points = 0;
    this.stopTimer.emit();
  }
}
