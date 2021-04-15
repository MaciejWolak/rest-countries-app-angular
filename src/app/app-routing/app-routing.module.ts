import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ContainerComponent} from '../container/container.component';
import {CountryDetailsComponent} from '../container/countries-list/country/country-details/country-details.component';
import {FindByNameComponent} from '../container/find-by-name/find-by-name.component';
import {FindByCapitalComponent} from '../container/find-by-capital/find-by-capital.component';
import {FindByCurrencyComponent} from '../container/find-by-currency/find-by-currency.component';
import {PageNotFoundComponent} from '../container/page-not-found/page-not-found.component';

const  routes: Routes = [
  {path: '', redirectTo: '/all', pathMatch: 'full'},
  {path: 'all', component: ContainerComponent},
  {path: 'detail/:name', component: CountryDetailsComponent},
  {path: 'find-by-name', component: FindByNameComponent},
  {path: 'find-by-capital', component: FindByCapitalComponent},
  {path: 'find-by-currency', component: FindByCurrencyComponent},
  {path: 'page-not-found', component: PageNotFoundComponent},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
