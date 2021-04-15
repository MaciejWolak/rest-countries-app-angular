import {Component, Input, OnInit} from '@angular/core';
import {Country} from '../../../../models/country';
import {ApiHttpService} from '../../../../services/api-http.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})


export class CountryDetailsComponent implements OnInit {

  @Input() country: Country;


  constructor(private apiHttp: ApiHttpService,
              private route: ActivatedRoute) {
  }

  countryDetails: Country[] = [];

  ngOnInit(): void {
    this.getCountry(this.route.snapshot.paramMap.get('name'));
  }

  getCountry(name): void {
    this.apiHttp.getCountry(name).subscribe(country => {
      console.error();
      this.countryDetails = country;

    });
  }
}
