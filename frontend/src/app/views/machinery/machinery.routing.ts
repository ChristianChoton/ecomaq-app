import { Routes } from "@angular/router";
import { MachineryListComponent } from "./machinery-list/machinery-list.component";
import { MachineryDetailComponent } from "./machinery-detail/machinery-detail.component";

export const MachineryRoutes : Routes = [
    { 
        path: '', 
        component: MachineryListComponent 
    },
    {
        path: ':id',
        component: MachineryDetailComponent
    },
    { 
      path: ':type', 
      component: MachineryListComponent 
    }
]