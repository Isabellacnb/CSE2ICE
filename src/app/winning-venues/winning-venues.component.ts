import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Team } from '../team';
import { CommunicationsService } from '../communications.service';
import { Game } from '../game';

// Purpose of component: Display a table of the team's winning venues

@Component({
  selector: 'app-winning-venues',
  templateUrl: './winning-venues.component.html',
  styleUrls: ['./winning-venues.component.css']
})
export class WinningVenuesComponent implements OnInit {

  constructor(private communications: CommunicationsService) { }

  @Input() team: Team;
  gamesVenues: Game[];
  teamName : string;

  ngOnInit(): void {
    this.getVenues();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['team']) {
      this.getVenues();
    }
  }

  // User story: 
  // “As a fan, I want to see all the venues where my team has won so far this season”
  getVenues(): void {
    this.communications.getGames().subscribe(temp => {
      var tempArr = [];
      var tempVenue: string;
      var check: boolean;
      check = true; // If check is true then venue is not yet on the array
      temp.forEach(element => {
        if ((element.hteamid == this.team.id || element.ateamid == this.team.id) && (element.winnerteamid == this.team.id)) {
          tempVenue = element.venue;
          tempArr.forEach(element => {
            if (element.venue == tempVenue) {
              check = false;
            }
          })
          if (check) {
            tempArr.push(element);
          }
          check = true;
        }
      });
      this.gamesVenues = tempArr;
      this.teamName = this.team.name;
    });
  }

}
