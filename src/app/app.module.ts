import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './shered/nav/nav.component';
import { FooterComponent } from './shered/footer/footer.component';
import { HeaderComponent } from './shered/header/header.component';
import { ContainerComponent } from './container/container.component';
import { CountriesListComponent } from './container/countries-list/countries-list.component';
import { CountryComponent } from './container/countries-list/country/country.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {CountryDetailsComponent} from './container/countries-list/country/country-details/country-details.component';
import { FindByNameComponent } from './container/find-by-name/find-by-name.component';
import { FindByCapitalComponent } from './container/find-by-capital/find-by-capital.component';
import { FindByCurrencyComponent } from './container/find-by-currency/find-by-currency.component';
import { PageNotFoundComponent } from './container/page-not-found/page-not-found.component';
import { ResultsComponent } from './container/results/results.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HeaderComponent,
    ContainerComponent,
    CountriesListComponent,
    CountryComponent,
    CountryDetailsComponent,
    FindByNameComponent,
    FindByCapitalComponent,
    FindByCurrencyComponent,
    PageNotFoundComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
