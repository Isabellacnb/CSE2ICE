import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CommunicationsService } from '../communications.service';
import { Team } from '../team';
import { Game } from '../game';
import { Tip } from '../tip';

@Component({
  selector: 'app-view-league-table',
  templateUrl: './view-league-table.component.html',
  styleUrls: ['./view-league-table.component.css']
})
export class ViewLeagueTableComponent implements OnInit {

  selectedTeam: Team;
  teams: Team[];
  games: Game[];
  gamesPredictionsR1: Tip[];
  allGames: Game[];

  constructor(private communications: CommunicationsService) { }

  // Display function results when team is selected
  ngOnInit() {
    this.getTeams();
    this.getGames();
    this.get2020PredictionsR1();
  } 

  onSelect(team: Team): void {

    this.selectedTeam = team;
  }

  getTeams(): void {
    this.communications.getTeams().subscribe(temp=> {this.teams = temp;});
  }

  getGames(): void {
    this.communications.getGames().subscribe(temp=> {this.games = temp;});
  }

  get2020PredictionsR1(): void {
    this.communications.get2020PredictionsR1().subscribe(temp=> {this.gamesPredictionsR1 = temp;});
  }
  
  getAllGames(): void {
    this.communications.getAllGames().subscribe(temp=> {this.allGames = temp});
  }





}
