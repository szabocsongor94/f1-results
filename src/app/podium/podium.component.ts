import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-podium',
  templateUrl: './podium.component.html',
  styleUrls: ['./podium.component.css']
})
export class PodiumComponent implements OnInit {

  @Input() podium: string[] = [];
  @Output() closed = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  close(){
    this.closed.emit();
  }

}
