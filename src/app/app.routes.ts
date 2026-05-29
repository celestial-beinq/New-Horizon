import { Routes } from '@angular/router';
import { Home } from './Pages/home/home';
import { Services } from './Pages/services/services';
import { Contact } from './Pages/contact/contact';
import { Investment } from './Pages/investment/investment';
import { Properties } from './Pages/properties/properties';

export const routes: Routes = [
    {path: 'home', component: Home},
    {path: 'services', component: Services},
    {path: 'properties', component: Properties },
    {path: 'investments', component: Investment},
    {path: 'contact', component: Contact},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: '**', redirectTo: 'home'}
];
