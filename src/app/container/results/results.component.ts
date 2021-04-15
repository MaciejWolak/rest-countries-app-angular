import {Component, Input, OnInit} from '@angular/core';
import {Country} from '../../models/country';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  @Input() country: Country;

  constructor() { }

  ngOnInit(): void {
  }

}
