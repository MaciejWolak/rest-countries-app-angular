import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Country} from '../models/country';
import {Observable} from 'rxjs';

const BASE_URL = 'https://restcountries.eu/rest/v2';
const ALL_URL = 'https://restcountries.eu/rest/v2/all';
const HTTP_OPTIONS = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

@Injectable({
  providedIn: 'root'
})
export class ApiHttpService {


  constructor(private http: HttpClient) {
  }

  getCountryByName(country: Country): Observable<Country[]> {
    // @ts-ignore
    return this.http.get<Country[]>(`${BASE_URL}/name/${country.name}`, JSON.stringify(country), HTTP_OPTIONS);
  }

  getCountryByCapital(country: Country): Observable<Country[]> {
    // @ts-ignore
    return this.http.get<Country[]>(`${BASE_URL}/capital/${country.capital}`, JSON.stringify(country), HTTP_OPTIONS);
  }

  getCountryByCurrency(country: Country): Observable<Country[]> {
    // @ts-ignore
    return this.http.get<Country[]>(`${BASE_URL}/currency/${country.currencies}`, JSON.stringify(country), HTTP_OPTIONS);
  }

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(ALL_URL);
  }

  getCountry(name: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${BASE_URL}/name/${name}`);
  }

}
