import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ready',
  templateUrl: './ready.component.html',
  styleUrls: ['./ready.component.scss']
})
export class ReadyComponent implements OnInit {
  
  @Input() difficulty: string;
  @Input() username: string;
  @Input() avatar: string;

  @Output() startEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  start(){
    this.startEvent.emit();
  }
}
