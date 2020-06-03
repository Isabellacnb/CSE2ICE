import { Component, OnInit } from '@angular/core';
import { CommunicationsService } from '../communications.service';
import { Source } from '../source';
import { Standings } from '../standings';
import { Game } from '../game';
import { formatDate } from "@angular/common";

// Purpose of component: Display three more user stories: current rankings of all teams, upcoming games by their date, tips for 2020 games by source

@Component({
  selector: 'app-hightlights',
  templateUrl: './hightlights.component.html',
  styleUrls: ['./hightlights.component.css']
})
export class HightlightsComponent implements OnInit {

  constructor(private communications: CommunicationsService) { }

  sources: Source[];
  sourceInfo: Source;
  standingsRanked: Standings[];
  upcomingGames: Game[];
  stringDate: string;

  ngOnInit(): void {
    this.getSources();
    this.getStandings();
    this.getUpcomingGames();
  }

  // Get array of sources that give tips
  getSources(): void {
    this.communications.getSources().subscribe(temp => { this.sources = temp; });
  }

  // When a team is selected the function will assign a value to the selectedTeam variable 
  // --> this must be done differently as when using a selection form the team is received as a string.
  onSelect(source: string): void {
    this.communications.getSources().subscribe(temp => {
      var sourceTemp: Source;

      temp.forEach(element => {
        if (element.name == source) {
          sourceTemp = element;
        }
      });
      this.sourceInfo = sourceTemp;
    })
  }

  // When a date is selected on the form selector the function will assign a value to the stringDate and it will be sent as a string
  onSelectDate(date: string): void {
    this.stringDate = date;
  }

  // Get all current standings of all teams
  getStandings(): void {
    this.communications.getStandings().subscribe(temp => { this.standingsRanked = temp; });
  }

  // Get a list of all upcoming games (fitting criteria of being incomplete, round not being 99 and avoid repetition of dates)
  getUpcomingGames(): void {
    this.communications.getAllGames().subscribe(temp => {
      var upcomingTemp = [];
      temp.forEach(element => {
        if (element.complete != 100 && element.round != 99 && this.contains(upcomingTemp, element) == false) {
          upcomingTemp.push(element);
        }
      });
      this.upcomingGames = upcomingTemp;
    })
  }

  // Function for checking if the date is already on the array
  contains(arr: Game[], val: Game): boolean {
    var check = false;
    arr.forEach(element => {
      if (formatDate(element.date, 'MMM-dd-yyyy', 'en-AU') == formatDate(val.date, 'MMM-dd-yyyy', 'en-AU')) {
        check = true;
      }
    });
    return check;
  }
}
