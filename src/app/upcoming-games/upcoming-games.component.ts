import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommunicationsService } from '../communications.service';
import { Game } from '../game';
import { CheckboxControlValueAccessor } from '@angular/forms';
import { formatDate } from '@angular/common';

// Display a table for the upcoming games according to the input date given

@Component({
  selector: 'app-upcoming-games',
  templateUrl: './upcoming-games.component.html',
  styleUrls: ['./upcoming-games.component.css']
})
export class UpcomingGamesComponent implements OnInit {


  constructor(private communications: CommunicationsService) { }
  upcomingGamesOnDate : Game[]
  @Input() gameDate : string;

  ngOnInit(): void {
    this.findGamesOnDate(this.gameDate);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['gameDate']) {
      this.findGamesOnDate(this.gameDate);
    }
  }

  // Find the games on the input gameDate string
  findGamesOnDate(date : string): void {
    this.communications.getAllGames().subscribe(temp=> {
      var dateTemp = [];
      temp.forEach(element => {
        if(formatDate(element.date, 'MMM d, y', 'en-AU') == date) {
          dateTemp.push(element);
        }
      });
      this.upcomingGamesOnDate = dateTemp;
    })
  }


}
