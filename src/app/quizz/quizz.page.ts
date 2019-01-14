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

  difficulty: string = "";
  username: string = "Guest"
  
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
      }
    })

    this.difficultyDisplay = false;
    this.readyDisplay = true;
  }

  startQuestions(){
    this.readyDisplay = false;
    this.questionsDisplay = true;
  }
}
