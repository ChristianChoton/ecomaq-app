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
            import('./Pages/Session/Session.module').then (m => m.SessionModule)
         },
         {
            path: 'checkout',loadChildren: ()=>
            import('./Pages/Checkout/Checkout.module').then (m => m.CheckoutModule)
         },
         {
            path: '',loadChildren: ()=>
            import('./Pages/About/About.module').then( m=> m.AboutModule)
         },
         {
            path: 'blogs',loadChildren: ()=>
            import('./Pages/Blogs/Blogs.module').then (m => m.BlogsModule)
         },
         {
            path: 'account',loadChildren: ()=>
            import('./Pages/UserAccount/UserAccount.module').then (m => m.UserAccountModule)
         }
      ]
   },
   {
      path: '**',
      redirectTo: 'not-found'
   }
]
