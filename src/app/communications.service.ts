import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http'; // Used to assist with out http communications
import { Team } from './team';
import { Tip } from './tip';
import { Game } from './game';

import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Standings } from './standings';
import { Source } from './source';

@Injectable({
  providedIn: 'root'
})
export class CommunicationsService {

  constructor(private http: HttpClient) { }

  // Get all teams
  getTeams(): Observable<Team[]> {
    return this.http.get('https://api.squiggle.com.au/?q=teams').pipe(
      map((data: any) => data.teams.map((item: any) => new Team(
        item.logo,
        item.id,
        item.name,
        item.abbrev
      )))
    );
  }

  // Get tips from year: 2019 and round: 20
  getTips(): Observable<Tip[]> {
    return this.http.get('https://api.squiggle.com.au/?q=tips;year=2020;round=2').pipe(
      map((data: any) => data.tips.map((item: any) => new Tip(
        item.confidence,
        item.bits,
        item.gameid,
        item.ateamid,
        item.venue,
        item.year,
        item.correct,
        item.date,
        item.updated,
        item.hteam,
        item.tipteamid,
        item.margin,
        item.err,
        item.tip,
        item.ateam,
        item.source,
        item.sourceid,
        item.hconfidence,
        item.hteamid,
        item.round
      )))
    );
  }

  // Get games from year 2019
  getGames(): Observable<Game[]> {
    return this.http.get('https://api.squiggle.com.au/?q=games;year=2019').pipe(
      map((data: any) => data.games.map((item: any) => new Game(
        item.complete,
        item.is_grand_final,
        item.tz,
        item.hbehinds,
        item.ateam,
        item.winnerteamid,
        item.hgoals,
        item.updated,
        item.round,
        item.is_final,
        item.hscore,
        item.abehinds,
        item.winner,
        item.ascore,
        item.hteam,
        item.ateamid,
        item.venue,
        item.hteamid,
        item.agoals,
        item.year,
        item.date,
        item.id
      )))
    );
  }

  // Get tips from year: 2020 and the next round to happen (round: 2)
  get2020PredictionsR1(): Observable<Tip[]> {
    var link = 'https://api.squiggle.com.au/?q=tips;year=2020;round=2';
    return this.http.get(link).pipe(
      map((data: any) => data.tips.map((item: any) => new Tip(
        item.confidence,
        item.bits,
        item.gameid,
        item.ateamid,
        item.venue,
        item.year,
        item.correct,
        item.date,
        item.updated,
        item.hteam,
        item.tipteamid,
        item.margin,
        item.err,
        item.tip,
        item.ateam,
        item.source,
        item.sourceid,
        item.hconfidence,
        item.hteamid,
        item.round
      )))
    );
  }

  // Get all games registered
  getAllGames(): Observable<Game[]> {
    return this.http.get('https://api.squiggle.com.au/?q=games').pipe(
      map((data: any) => data.games.map((item: any) => new Game(
        item.complete,
        item.is_grand_final,
        item.tz,
        item.hbehinds,
        item.ateam,
        item.winnerteamid,
        item.hgoals,
        item.updated,
        item.round,
        item.is_final,
        item.hscore,
        item.abehinds,
        item.winner,
        item.ascore,
        item.hteam,
        item.ateamid,
        item.venue,
        item.hteamid,
        item.agoals,
        item.year,
        item.date,
        item.id
      )))
    );
  }

  // Get current team standings
  getStandings(): Observable<Standings[]> {
    return this.http.get('https://api.squiggle.com.au/?q=standings').pipe(
      map((data: any) => data.standings.map((item: any) => new Standings(
        item.against,
        item.behinds_against,
        item.behinds_for,
        item.goals_for,
        item.played,
        item.goals_against,
        item.id,
        item.percentage,
        item.rank,
        item.wins,
        item.pts,
        item.draws,
        item.losses,
        item.name,
        item.for
      )))
    );
  }

  // Get all sources for tips
  getSources(): Observable<Source[]> {
    return this.http.get('https://api.squiggle.com.au/?q=sources').pipe(
      map((data: any) => data.sources.map((item: any) => new Source(
        item.name,
        item.url,
        item.icon,
        item.id
      )))
    );
  }
}
