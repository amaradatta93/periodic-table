import { Component, OnInit } from '@angular/core';
import { ELEMENTS } from '../data';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  displayedColumns: string[] = ['element'];
  dataSource: any[] = ELEMENTS;

  constructor() { }

  ngOnInit(): void {
  }


}
