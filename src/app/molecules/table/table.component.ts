import { Component, Input, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit{
  
  @Input()
  elementData: PeriodicElement[] = [];

  @Input()
  columnNames: string[] = [];

  displayedColumns: string[] = [];
  dataSource: PeriodicElement[] = [];

  ngOnInit() {
    console.log('elementData', this.elementData);
    this.displayedColumns= this.columnNames;
    this.dataSource= this.elementData;
  }



}
