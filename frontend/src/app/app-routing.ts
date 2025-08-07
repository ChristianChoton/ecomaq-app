import { Routes} from '@angular/router';
import { MainComponent } from './main/main.component';
import { NotFoundComponent } from './Pages/NotFound/NotFound.component';
import { HomeComponent } from './views/home/home.component';
import { CartComponent } from './views/cart/cart.component';

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
          path: 'not-found',
          component: NotFoundComponent
         },
         {
            path: 'session',loadChildren: ()=>
            import('./views/payment/payment.module').then(m => m.PaymentModule)
         },
         {
            path: 'checkout',loadChildren: ()=>
           import('./views/payment/payment.module').then(m => m.PaymentModule)
         },
         {
            path: 'account',loadChildren: ()=>
            import('./views/account/account.module').then (m => m.AccountModule)
         }
      ]
   },
   {
      path: '**',
      redirectTo: 'not-found'
   }
]
