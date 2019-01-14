import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.page.html',
  styleUrls: ['./quizz.page.scss'],
})

export class QuizzPage implements OnInit {

  //Display
  homeDisplay: Boolean = true;
  difficultyDisplay: Boolean = false;
  readyDisplay: Boolean = false;
  questionsDisplay: Boolean = false;
  resultsDisplay: Boolean = false;
  timerDisplay: Boolean = false;

  difficulty: string = "";
  username: string = "Guest"
  avatar: string = "";
  points: any = 0;
  timeScore: any = 0;
  timer: boolean = false;

  constructor(private storage: Storage) { }

  ngOnInit() {

  }

  showDifficulties() {
    this.homeDisplay = false;
    this.difficultyDisplay = true;
  }

  setDifficulty(difficulty: string = ""){
    this.difficulty = difficulty;
    
    this.storage.get('pseudo').then( (val) => {
      if(val){
        this.username = val;
        this.storage.get('avatar').then( (val) => {
          this.avatar = val;
        })
      }
    })

    this.difficultyDisplay = false;
    this.readyDisplay = true;
  }

  endGame(points: any){
    this.points = points;
    this.questionsDisplay = false;
    this.resultsDisplay = true;
  }

  stopTimer(){
    this.timer = false;
  }

  setTimeScore(score){
    this.timeScore = score;
  }

  startQuestions(){
    this.readyDisplay = false;
    this.questionsDisplay = true;
    this.timerDisplay = true;
    this.timer = true;
  }
}
