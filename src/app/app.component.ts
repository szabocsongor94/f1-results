import { Component, Output } from '@angular/core';
import { ressults } from './results';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'f1-results';

  results = ressults;

  selectedResult: number | undefined;


}
