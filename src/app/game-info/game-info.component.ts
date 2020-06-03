import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommunicationsService } from '../communications.service';
import { Game } from '../game';
import { Team } from '../team';

// Purpose of component: Display a table of matches from the team (as input) from the team-info component

@Component({
  selector: 'app-game-info',
  templateUrl: './game-info.component.html',
  styleUrls: ['./game-info.component.css']
})
export class GameInfoComponent implements OnInit {

  games: Game[];
  @Input() team: Team;
  teamName : string;

  constructor(private communications: CommunicationsService) { }


  ngOnChanges(changes: SimpleChanges) {
    if (changes['team']) {
      this.getGames();
    }
  }

  ngOnInit(): void {
    this.getGames();
  }

  // Function to get the input team matches of 2019
  getGames(): void {
    this.communications.getGames().subscribe(temp => {
      var tempArr = [];

      temp.forEach(element => {
        if (element.hteamid == this.team.id || element.ateamid == this.team.id) {
          tempArr.push(element);
        }
      });
      this.games = tempArr;
      this.teamName = this.team.name;

    });
  }

}
