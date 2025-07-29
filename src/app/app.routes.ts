import { Routes } from '@angular/router';
import { User } from './user/user';
import { Home } from './home/home';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', title: 'App Home Page', component: Home },
    { path: 'user', title: 'User page', component: User }
];
