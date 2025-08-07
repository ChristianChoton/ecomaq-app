import { Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { OrderHistoryComponent } from './order-history/order-history.component';



export const AccountRoutes : Routes = [
   {
      path : '',
      component : DetailComponent,
      children: [ 
         {
            path: 'profile',
            component: ProfileComponent
         },         
         { 
            path: 'order-history', 
            component: OrderHistoryComponent 
         },
         {
            path: 'profile/edit',
            component: EditProfileComponent
         }         
      ]
   }
]