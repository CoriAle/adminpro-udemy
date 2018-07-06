import {Routes} from '@angular/router';
import {RouterModule} from '@angular/router';

//import {Re} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './login/register.component';
import {NopagefoundComponent} from './shared/nopagefound/nopagefound.component';

const appRoutes: Routes = [
	{path: 'login', component: LoginComponent},
	{path: 'register', component: RegisterComponent},
	{path: '**', component: NopagefoundComponent}
];
export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash:true});