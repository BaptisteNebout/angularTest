import { Routes } from '@angular/router';
import { User } from './user/user';
import { Home } from './home/home';
import { CarService } from './car-service/car-service';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', title: 'App Home Page', component: Home },
    { path: 'user', title: 'User page', component: User },
    { path: 'car-service', title: 'Car Service', component: CarService },
];
