import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommunicationsService } from '../communications.service';
import { Game } from '../game';
import { Team } from '../team';

// Purpose of component: Displays a selector for all teams (favourite team will be compared with the team selected here)

@Component({
  selector: 'app-headtohead-games',
  templateUrl: './headtohead-games.component.html',
  styleUrls: ['./headtohead-games.component.css']
})
export class HeadtoheadGamesComponent implements OnInit {

  constructor(private communications: CommunicationsService) { }
  @Input() currentTeam: Team;

  selectedTeam: Team;
  games: Game[];
  teams: Team[];
  current = this.currentTeam;

  ngOnInit(): void {
    this.getTeams();
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['team']) {
      this.getTeams();
    }
  }

  // When a team is selected the function will assign a value to the selectedTeam variable 
  // --> this must be done differently as when using a selection form the team is received as a string.
  onSelect(team: string): void {
    this.communications.getTeams().subscribe(temp => {
      var teamInfo: Team;

      temp.forEach(element => {
        if (element.name == team) {
          teamInfo = element;
        }
      });
      this.selectedTeam = teamInfo;
    });
  }

  // User Story: 
  // “As a fan, I want to see the head-to-head games and if available, results between my team and my team’s rival <..> this season
  getTeams(): void {
    this.communications.getTeams().subscribe(temp => { this.teams = temp; });
  }


}
