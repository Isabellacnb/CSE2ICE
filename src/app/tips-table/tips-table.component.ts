import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommunicationsService } from '../communications.service';
import { Source } from '../source';
import { Tip } from '../tip';

// Display 

@Component({
  selector: 'app-tips-table',
  templateUrl: './tips-table.component.html',
  styleUrls: ['./tips-table.component.css']
})
export class TipsTableComponent implements OnInit {

  @Input() source: Source;
  sourceTips: Tip[];
  sourceIcon: string;
  sourceUrl: string;

  constructor(private communications: CommunicationsService) { }

  ngOnInit(): void {
    this.getTips();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['source']) {
      this.getTips();
    }
  }

  // Function to get all tips of a source
  getTips(): void {
    this.communications.getTips().subscribe(temp => {
      var tempTips = [];
      temp.forEach(element => {
        if (element.sourceid == this.source.id) {
          tempTips.push(element);
          this.sourceIcon = this.source.icon;
          this.sourceUrl = this.source.url;
        }
      });
      this.sourceTips = tempTips;
    });
  }
}
