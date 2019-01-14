import { Component, OnInit, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  timeStart = 0;
  timeElapsed = 0;
  interval: any = false;
  pause = false;

  @Input() timer: boolean;
  @Output() timeScore = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.interval = this.chrono();
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    if (this.timer === false){ 
      this.stopTimer();
    }
  }

  startTimer = () => {
    this.interval = this.chrono();
  }

  stopTimer = () => {
    this.timeScore.emit(this.timeElapsed);
    clearInterval(this.interval);
    this.timeElapsed = 0;
    this.interval = false;
  }

  chrono = () => {
    let interval = setInterval(() => {
        this.timeElapsed = this.timeElapsed + 100
    }, 100);
    return interval;
  }

  displayTime(time) {
    const dateObject = new Date(time);
    let hours = dateObject.getMinutes();
    let minutes = dateObject.getSeconds();
    let seconds = Math.round(dateObject.getMilliseconds() / 100);
    return `${this._twoDigits(hours)} : ${this._twoDigits(minutes)} : ${this._twoDigits(seconds)}`;
  }

  _twoDigits(number) {
    if (number < 10) {
        return '0' + number;
    } else {
        return number;
    }
  }

}
