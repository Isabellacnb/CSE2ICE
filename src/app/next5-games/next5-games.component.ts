import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommunicationsService } from '../communications.service';
import { Game } from '../game';
import { Team } from '../team';
import { Tip } from '../tip';

// Purpose of component: Display the information of the team's next 5 matches with opponent team details

@Component({
  selector: 'app-next5-games',
  templateUrl: './next5-games.component.html',
  styleUrls: ['./next5-games.component.css']
})
export class Next5GamesComponent implements OnInit {


  constructor(private communications: CommunicationsService) { }
  @Input() team: Team;

  games: Game[];
  opponentGames: Game[];
  opponentTeamInfo: Team[];
  teams: Team[];

  ngOnInit(): void {
    this.getOpponentDetails();
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['team']) {
      this.getOpponentDetails();
    }
  }

  // User story: 
  // "As a fan, I want to see opponent and games details for the next 5 matches my team will play"
  getOpponentDetails(): void {
    this.communications.getAllGames().subscribe(temp => {

      this.communications.getAllGames().subscribe(temp => {
        var tempArr = [];
        var tempTeam = [];
        var count = 0;
        var id: number;

        temp.forEach(element => {
          if ((element.hteamid == this.team.id || element.ateamid == this.team.id) && element.complete == 0 && count < 5) {
            tempArr.push(element);
            if (element.hteamid == this.team.id) {
              this.communications.getTeams().subscribe(teamAux => {
                teamAux.forEach(Team => {
                  if (element.ateamid == Team.id) {
                    tempTeam.push(Team);
                  }
                });
              });
            } else {
              this.communications.getTeams().subscribe(teamAux => {
                teamAux.forEach(Team => {
                  if (element.hteamid == Team.id) {
                    tempTeam.push(Team);
                  }
                });
              });
            }

            count++;
          }
        });
        this.opponentGames = tempArr;
        this.opponentTeamInfo = tempTeam;
      });
    });
  }

}
