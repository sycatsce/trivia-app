import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as $ from 'jquery';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  @Input() avatar: any;
  @Input() difficulty: any;
  @Input() username: any;
  @Input() points: any;
  @Input() time: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  sendResults(){
    let payload = {
      nickname: this.username,
      score: this.points,
      time: this.time,
      avatar_url: this.avatar
    }

    let httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json' }) };
    this.http.post('https://leaderboard.lp1.eu/api/score', payload, httpOptions).subscribe( (data: any) => {
      $('#sendButton').text('Done');
      $('#sendButton').prop('disabled', 'true');
    })
  }

}
