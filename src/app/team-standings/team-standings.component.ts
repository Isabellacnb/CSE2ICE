import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommunicationsService } from '../communications.service';
import { Team } from '../team';
import { Standings } from '../standings';

// Purpose of component: Display table of team standings with the input given (team).

@Component({
  selector: 'app-team-standings',
  templateUrl: './team-standings.component.html',
  styleUrls: ['./team-standings.component.css']
})
export class TeamStandingsComponent implements OnInit {

  @Input() team: Team;
  standingsTeam: Standings;

  constructor(private communications: CommunicationsService) { }

  ngOnInit(): void {
    this.getStandings();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['team']) {
      this.getStandings();
    }
  }

  // Function to get the input team standings
  getStandings(): void {
    var tempVal: Standings;
    this.communications.getStandings().subscribe(temp => {
      temp.forEach(element => {
        if (element.id == this.team.id) {
          tempVal = element;
        }
      });
      this.standingsTeam = tempVal;
    });
  }


}
