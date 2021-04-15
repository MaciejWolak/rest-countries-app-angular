import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Country} from '../../models/country';
import {ApiHttpService} from '../../services/api-http.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-find-by-capital',
  templateUrl: './find-by-capital.component.html',
  styleUrls: ['./find-by-capital.component.css']
})
export class FindByCapitalComponent implements OnInit {
  findCountryForm: FormGroup;

  @Input() country: Country;


  constructor(private apiHttp: ApiHttpService,
              private builder: FormBuilder,
              private router: Router) {
  }

  countryDetails: Country[] = [];

  ngOnInit(): void {
    this.buildForm();
  }

  // tslint:disable-next-line:typedef
  buildForm() {
    // @ts-ignore
    this.findCountryForm = this.builder.group({
        capital: ['', Validators.required]
      }
    );
  }

  getCountryByCapital(): void {
    console.log('start');
    this.apiHttp.getCountryByCapital(this.findCountryForm.value).subscribe(country => {
        console.log(country);
        this.countryDetails = country;
        this.findCountryForm.reset();
      }, error => this.router.navigate(['page-not-found'])
    );
  }
}
