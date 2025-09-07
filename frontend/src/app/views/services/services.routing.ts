import { Routes } from '@angular/router';
import { ServiceListComponent } from './service-list/service-list.component';


export const ServicesRoutes : Routes = [
    { 
        path: '', 
        component: ServiceListComponent 
    }
]