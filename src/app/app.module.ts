import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AFLHomeComponent } from './aflhome/aflhome.component';
import { TeamsComponent } from './teams/teams.component';
import { MatchesComponent } from './matches/matches.component';
import { HightlightsComponent } from './hightlights/hightlights.component'; // Import HTTP capabilities into the app
import { RouterModule } from '@angular/router';
import { ViewLeagueTableComponent } from './view-league-table/view-league-table.component';
import { TeamInfoComponent } from './team-info/team-info.component';
import { GameInfoComponent } from './game-info/game-info.component';
import { MyTeamComponent } from './my-team/my-team.component';
import { OpponentGamesComponent } from './opponent-games/opponent-games.component';
import { WinningVenuesComponent } from './winning-venues/winning-venues.component';
import { PredictionsComponent } from './predictions/predictions.component';
import { Next5GamesComponent } from './next5-games/next5-games.component';
import { HeadtoheadGamesComponent } from './headtohead-games/headtohead-games.component';
import { ViewLeagueTable2Component } from './view-league-table2/view-league-table2.component';
import { TeamStandingsComponent } from './team-standings/team-standings.component';
import { TipsTableComponent } from './tips-table/tips-table.component';
import { UpcomingGamesComponent } from './upcoming-games/upcoming-games.component';

@NgModule({
  declarations: [
    AppComponent,
    AFLHomeComponent,
    TeamsComponent,
    MatchesComponent,
    HightlightsComponent,
    ViewLeagueTableComponent,
    TeamInfoComponent,
    GameInfoComponent,
    MyTeamComponent,
    OpponentGamesComponent,
    WinningVenuesComponent,
    PredictionsComponent,
    Next5GamesComponent,
    HeadtoheadGamesComponent,
    ViewLeagueTable2Component,
    TeamStandingsComponent,
    TipsTableComponent,
    UpcomingGamesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot ([
      {path: 'aflhome', component: AFLHomeComponent},
      {path: 'highlights', component: HightlightsComponent},
      {path: 'matches', component: MatchesComponent},
      {path: 'teams', component: TeamsComponent},
      {path: 'myTeam', component: MyTeamComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
