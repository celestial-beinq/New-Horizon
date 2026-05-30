import { Routes } from '@angular/router';
import { Home } from './Pages/home/home';
import { Services } from './Pages/services/services';
import { Contact } from './Pages/contact/contact';
import { Investment } from './Pages/investment/investment';
import { Properties } from './Pages/properties/properties';
import { PropertyDetails } from './Pages/property-details/property-details';

export const routes: Routes = [
    {path: 'home', component: Home},
    {path: 'services', component: Services},
    {path: 'properties', component: Properties },
    {path: 'investments', component: Investment},
    {path: 'contact', component: Contact},
    {path: 'property-details/:id', component: PropertyDetails},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: '**', redirectTo: 'home'}
];
