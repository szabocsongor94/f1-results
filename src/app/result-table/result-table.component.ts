import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Result } from '../results'

@Component({
  selector: 'app-result-table',
  templateUrl: './result-table.component.html',
  styleUrls: ['./result-table.component.css']
})
export class ResultTableComponent implements OnInit {

  @Input() results: Result[] = [];
  @Input() selectedResult: number | undefined;
  @Output() selectedResultChange: EventEmitter<number> = new EventEmitter();

  

  
  constructor() { }

  ngOnInit(): void {
   console.log(this.selectedResult)
  }

  select(i: number) {
    this.selectedResultChange.emit(i);
    //console.log(i)
  }
  

}
