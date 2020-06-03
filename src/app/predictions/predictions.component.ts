import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommunicationsService } from '../communications.service';
import { Game } from '../game';
import { Team } from '../team';
import { Tip } from '../tip';

// Component Purpose: Display a table of the team's predictions for its following match

@Component({
  selector: 'app-predictions',
  templateUrl: './predictions.component.html',
  styleUrls: ['./predictions.component.css']
})
export class PredictionsComponent implements OnInit {

  constructor(private communications: CommunicationsService) { }
  @Input() team: Team;

  predictionsR1: Tip[];
  gameATeam: string;
  gameHTeam: string;
  gameID: number;
  gameVenue: string;
  gameRound: number;
  gameYear: number;
  gameDate: string;
  teams: Team[];
  teamName: string;


  ngOnInit(): void {
    this.getPredictionsR1();
  }


  ngOnChanges(changes: SimpleChanges) {
    if (changes['team']) {
      this.getPredictionsR1();
    }
  }

  // User story:
  // “As a fan, I want to see the prediction that my team will win their next game” 
  getPredictionsR1(): void {
    this.communications.get2020PredictionsR1().subscribe(temp => {
      var tempArr = [];
      temp.forEach(element => {
        if (element.hteamid == this.team.id || element.ateamid == this.team.id) {
          tempArr.push(element);
          this.gameID = element.gameid;
          this.gameATeam = element.ateam;
          this.gameHTeam = element.hteam;
          this.gameVenue = element.venue;
          this.gameRound = element.round;
          this.gameYear = element.year;
          this.gameDate = element.date;

        }
      });
      this.predictionsR1 = tempArr;
      this.teamName = this.team.name;
    });
  }

}
