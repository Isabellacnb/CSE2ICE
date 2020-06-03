import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommunicationsService } from '../communications.service';
import { Game } from '../game';
import { Team } from '../team';
import { Tip } from '../tip';
import { templateJitUrl } from '@angular/compiler';

@Component({
  selector: 'app-team-info',
  templateUrl: './team-info.component.html',
  styleUrls: ['./team-info.component.css']
})
export class TeamInfoComponent implements OnInit {
  
  @Input() team: Team;

  selectedTeam = this.team;
  teams: Team[];
  venueLoad = false;
  predictionLoad = false;
  nextMatchesLoad = false;
  matchesLoad = false;
  headtoHeadLoad = false;

  constructor(private communications: CommunicationsService) { }

  ngOnInit(): void {
    this.getTeams();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['team']) {
      this.getTeams();
    }
  }
  
  // Load the team's winning venues --> If selected, the venues are shown. If selected again, the venues are hidden.
  loadVenues() {
    if (this.venueLoad == true) {
      this.venueLoad = false;
    } else {
      this.venueLoad = true;
    }
  }

  // Load predictions on the team's next games --> If selected, the predictions are show. If selected again, the predictions are hidden.
  loadPredictions() {
    if (this.predictionLoad == true) {
      this.predictionLoad = false;
    } else {
      this.predictionLoad = true;
    }
  }

  // Loads next 5 matches of the team --> If selected, the next 5 matches are show. If selected again, the matches are hidden.
  loadNextMatches() {
    if (this.nextMatchesLoad == true) {
      this.nextMatchesLoad = false;
    } else {
    this.nextMatchesLoad = true;
    }
  }

  // Loads Matches --> If selected, the matches are shown. If selected again, the matches are hidden.
  loadMatches() {
    if (this.matchesLoad == true ) {
      this.matchesLoad = false;
    } else {
      this.matchesLoad = true;
    }
  }

  // Loads Head-to-Head games --> If selected, the head-to-head games are shown. If selected, again the head-to-head games are hidden
  loadHeadtoHeadGames() {
    if (this.headtoHeadLoad == true) {
      this.headtoHeadLoad = false;
    } else {
      this.headtoHeadLoad = true;
    }
  }

  // Get all teams for selector
  getTeams(): void {
    this.communications.getTeams().subscribe(temp=> {this.teams = temp;});
  }


  




  
}
