import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { CommunicationsService } from '../communications.service';
import { Team } from '../team';

// Purpose of component: Display a selector of teams to choose.

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {

  teams: Team[];
  selectedTeam: Team;

  constructor(private communications: CommunicationsService) { }

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

  // Get 2019 teams to use for the form selector
  getTeams(): void {
    this.communications.getTeams().subscribe(temp=> {this.teams = temp;});
  } 




  


}
