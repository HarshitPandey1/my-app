import { Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { OffersSliderCardComponent } from './components/offers-slider/offers-slider-card/offers-slider-card.component';
import { OffersSliderFormComponent } from './components/offers-slider/offers-slider-form/offers-slider-form.component';

export const routes: Routes = [
    {
        path: 'header', component: HeaderComponent
    },
    {
        path:'sidebar', component: SidebarComponent
    },
    {
        path: 'dashboard', component: DashboardComponent
    },
    {
        path: 'profile', component: ProfileComponent
    },
    {
        path:'offer-form',component: OffersSliderFormComponent
    },
    {
        path: '', component: DashboardComponent
    }
];
