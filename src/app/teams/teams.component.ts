import { Component, OnInit, Input } from '@angular/core';

// Purpose of component: Show list of teams, upon selection, show team information and standings.

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
