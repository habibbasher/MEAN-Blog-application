import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

// Importing Custom Components
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterComponent } from './components/register/register.component';

const appRoutes: Routes = [
    { 
        path: '', 
        component: HomeComponent // The Default Route
    },
    {
        path: 'dashboard',
        component: DashboardComponent // The Dashboard Route
    },
    {
        path: 'register',
        component: RegisterComponent // The Dashboard Route
    },
    { 
        path: '**', 
        component: HomeComponent // The "Catch-All" Route
    }
  ];


@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    providers: [],
    bootstrap: [],
    exports: [RouterModule]
})
export class AppRoutingModule { }