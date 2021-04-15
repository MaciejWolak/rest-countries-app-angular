import {Component, OnInit} from '@angular/core';
import {ApiHttpService} from '../../services/api-http.service';
import {Country} from '../../models/country';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.css']
})
export class CountriesListComponent implements OnInit {

  countriesList: Country[] = [];

  constructor(private apiHttp: ApiHttpService) {
  }

  ngOnInit(): void {
    this.apiHttp.getCountries().subscribe((countries) => {
      this.countriesList = countries;
    });
  }

}
