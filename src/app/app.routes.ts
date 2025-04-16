import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { SplashComponent } from './features/splash/splash.component';

export const routes: Routes = [
    { path: '', redirectTo: 'splash', pathMatch: 'full' },
    { path: 'splash', component: SplashComponent },
    { path: 'home', component: HomeComponent }
];
