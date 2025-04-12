import { Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { OffersSliderCardComponent } from './components/offers-slider/offers-slider-card/offers-slider-card.component';
import { OffersSliderFormComponent } from './components/offers-slider/offers-slider-form/offers-slider-form.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { LoginComponent } from './components/auth/login/login.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about/about.component';
import { AvailableBusComponent } from './components/available-bus/available-bus.component';
import { ContactListComponent } from './components/contact/contact-list/contact-list.component';
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
        path:'register',component:RegisterComponent
    },
    {
        path:'login',component:LoginComponent
    },
    {
        path:'contact',component:ContactComponent
    },
    {
        path:'about',component:AboutComponent
    },
    {
        path:'available-bus',component:AvailableBusComponent
    },
    {
        path:'contact-list',component:ContactListComponent
    },
    {
        path: '', component: RegisterComponent
    }
];
