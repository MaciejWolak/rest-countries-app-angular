import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Country} from '../../models/country';
import {ApiHttpService} from '../../services/api-http.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-find-by-name',
  templateUrl: './find-by-name.component.html',
  styleUrls: ['./find-by-name.component.css']
})
export class FindByNameComponent implements OnInit {


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
        name: ['', Validators.required]
      }
    );
  }

  getCountryByName(): void {
    console.log('start');
    this.apiHttp.getCountryByName(this.findCountryForm.value).subscribe(country => {
        console.log(country);
        this.countryDetails = country;
        this.findCountryForm.reset();
      }, error => this.router.navigate(['page-not-found'])
    );
  }

}
