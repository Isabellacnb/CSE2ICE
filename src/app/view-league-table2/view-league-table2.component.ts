import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommunicationsService } from '../communications.service';
import { Team } from '../team';

// Purpose of component: Show table of teams. When team is selected, general information is shown and sends selectedTeam to team-standinds component.

@Component({
  selector: 'app-view-league-table2',
  templateUrl: './view-league-table2.component.html',
  styleUrls: ['./view-league-table2.component.css']
})
export class ViewLeagueTable2Component implements OnInit {

  teams: Team[];
  selectedTeam: Team;

  constructor(private communications: CommunicationsService) { }

  ngOnInit() {
    this.getTeams();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['selectedTeam']) {
      this.getTeams();
    }
  }

  // When a team is selected the function will assign a value to the selectedTeam variable
  onSelect(team: Team): void {
    this.selectedTeam = team;
  }
  // Get all teams to display on table
  getTeams(): void {
    this.communications.getTeams().subscribe(temp => { this.teams = temp; });
  }

}
