import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommunicationsService } from '../communications.service';
import { Game } from '../game';
import { Team } from '../team';
import { Standings } from '../standings';

// Purpose of component: Displays games and standings comparations of both favourite team and selected team

@Component({
  selector: 'app-opponent-games',
  templateUrl: './opponent-games.component.html',
  styleUrls: ['./opponent-games.component.css']
})
export class OpponentGamesComponent implements OnInit {

  games: Game[];
  @Input() opponentTeam: Team;
  @Input() cTeam: Team;
  arrayStandings: Standings[]

  constructor(private communications: CommunicationsService) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['opponentTeam']) {
      this.getGames();
      this.getStandings();
    }
  }

  ngOnInit(): void {
    this.getGames();
    this.getStandings();
  }

  // Get array games between current team and selected opponent
  getGames(): void {
    this.communications.getGames().subscribe(temp => {
      var tempArr = [];

      temp.forEach(element => {
        if ((element.hteamid == this.cTeam.id || element.ateamid == this.cTeam.id) && (element.hteamid == this.opponentTeam.id || element.ateamid == this.opponentTeam.id)) {
          tempArr.push(element);
        }
      });
      this.games = tempArr;
    });
  }

  // Get standings and rankings information of both current team and selected opponent
  getStandings(): void {
    this.communications.getStandings().subscribe(temp => {
      var standingArr = [];

      temp.forEach(element => {
        if ((element.id == this.cTeam.id) || (element.id == this.opponentTeam.id)) {
          standingArr.push(element);
        }
      });
      this.arrayStandings = standingArr;
    });
  }

}
