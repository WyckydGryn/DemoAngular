import { Component, OnInit } from '@angular/core';
import { TableDataService } from './table-data.service';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-demo-table',
  templateUrl: './demo-table.component.html',
  styleUrls: ['./demo-table.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', visibility: 'hidden' })),
      state('expanded', style({ height: '*', visibility: 'visible' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class DemoTableComponent implements OnInit {
  tableData;
  state = 'collapsed';
  anim(){
    this.state == 'collapsed' ?
    this.state = 'expanded' : this.state = 'collapsed';
  }
  constructor() {
    let tableDataService = new TableDataService();
    this.tableData = tableDataService.getData();

   }

  ngOnInit(): void {
  }

}
