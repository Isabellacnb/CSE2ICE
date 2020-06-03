import { Component, OnInit } from '@angular/core';
import { ViewLeagueTableComponent } from '../view-league-table/view-league-table.component'
import { Team } from '../team';
import { CommunicationsService } from '../communications.service';

// Purpose of component: Select a favourite team, that will allow user to see the team's information (mandatory user stories implemented here)
// Information: General team info, 2019 matches, winning venues, predictions for next game, next 5 matches (with opponent team information) and head-to-head games

@Component({
  selector: 'app-my-team',
  templateUrl: './my-team.component.html',
  styleUrls: ['./my-team.component.css']
})
export class MyTeamComponent implements OnInit {

  constructor(private communications: CommunicationsService) { }

  selectedTeam: Team;
  teams: Team[];

  ngOnInit() {
    this.getTeams();
  } 

  // When a team is selected the function will assign a value to the selectedTeam variable 
  // --> this must be done differently as when using a selection form the team is received as a string.
  onSelect(team: string): void {
    this.communications.getTeams().subscribe(temp=> {
      var teamInfo : Team;

      temp.forEach(element => {
        if(element.name == team) {
          teamInfo = element;
        }
      });
      this.selectedTeam = teamInfo;

    })
  }

  // Get all teams to display on the selection form
  getTeams(): void {
    this.communications.getTeams().subscribe(temp=> {this.teams = temp;});
  }

  

}
