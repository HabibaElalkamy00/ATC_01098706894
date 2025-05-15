import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { EventDetailsComponent } from './pages/event-details/event-details.component';
import { AdminComponent } from './pages/admin/admin.component';
import { AdminGuard } from './guards/admin.guard';


export const routes: Routes = [
    {
        path: "",
        component: HomeComponent,
    }, 
    {
        path: "login",
        component: LoginComponent,
    },
    {
        path: "register",
        component: RegisterComponent,
    },
    {
        path: "event/:id",
        component: EventDetailsComponent,
    },
    {
        path: 'admin',
        loadComponent: () => import('./pages/admin/admin.component').then(m => m.AdminComponent),
        canActivate: [AdminGuard]
    },
    {
        path: 'congrats',
        loadComponent: () => import('./pages/congrats/congrats.component').then(m => m.CongratsComponent)
    },


];
