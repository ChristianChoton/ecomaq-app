import { Routes} from '@angular/router';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './views/home/home.component';
import { CartComponent } from './views/cart/cart.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { CommentComponent } from './views/comment/comment.component';

export const AppRoutes : Routes = [
   {
      path : '',
      redirectTo: 'home',
      pathMatch: 'full',
   },
   {
      path : '',
      component : MainComponent,
      children: [ 
         {
            path : 'home',
            component : HomeComponent
         },
         {
            path: 'products',loadChildren: ()=>
            import('./views/products/products.module').then (m => m.ProductsModule)
         },
         {
            path: 'machinery',loadChildren: ()=>
            import('./views/machinery/machinery.module').then (m => m.MachineryModule)
         },
         {
            path: 'cart',
            component: CartComponent
         },
         {
            path: 'comment',
            component: CommentComponent
         },
         {
          path: 'not-found',
          component: NotFoundComponent
         },
         {
            path: 'session',loadChildren: ()=>
            import('./views/session/session.module').then(m => m.SessionModule)
         },
         {
            path: 'checkout',loadChildren: ()=>
           import('./views/payment/payment.module').then(m => m.PaymentModule)
         },
         {
            path: 'account',loadChildren: ()=>
            import('./views/account/account.module').then (m => m.AccountModule)
         },
         {
            path: 'admin',loadChildren: ()=>
            import('./views/admin/admin.module').then (m => m.AdminModule)
         }
      ]
   },
   {
      path: '**',
      redirectTo: 'not-found'
   }
]
