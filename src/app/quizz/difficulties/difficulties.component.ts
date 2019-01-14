import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-difficulties',
  templateUrl: './difficulties.component.html',
  styleUrls: ['./difficulties.component.scss']
})
export class DifficultiesComponent implements OnInit {
  @Output() difficultyEvent = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  selectDifficulty(difficulty: string = ""){
    this.difficultyEvent.emit(difficulty);
  }
}
