export class Country {
  flag: string;
  name: string;
  topLevelDomain: object;
  capital: string;
  region: string;
  subregion: string;
  population: number;
  area: number;
  timezones: object;
  borders: object;
  currencies: object;
  languages: object;

  constructor(flag: string, name: string, topLevelDomain: object, capital: string, region: string, subregion: string,
              population: number, area: number, timezones: object,
              borders: object, currencies: object, languages: object) {
    this.flag = flag;
    this.name = name;
    this.topLevelDomain = topLevelDomain;
    this.capital = capital;
    this.region = region;
    this.subregion = subregion;
    this.population = population;
    this.area = area;
    this.timezones = timezones;
    this.borders = borders;
    this.currencies = currencies;
    this.languages = languages;
  }
}
