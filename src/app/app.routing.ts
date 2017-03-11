import { MovieComponent } from './movie/movie.component';
import { WeatherComponent } from './weather/weather.component';
import { CurrencyComponent } from './currency/currency.component';
import {Routes, RouterModule} from '@angular/router';

const MAIN_MENU_ROUTES: Routes = [
    //Tenha certeza de colocar o caminho absoluto
    { path: '', redirectTo: '/weather', pathMatch: 'full'},
    { path: 'weather', component: WeatherComponent },
    { path: 'movie', component: MovieComponent },
    { path: 'currency', component: CurrencyComponent }
];

export const CONST_ROUTING = RouterModule.forRoot(MAIN_MENU_ROUTES);
