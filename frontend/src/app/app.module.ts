import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutes } from './app-routing';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { MenuComponent } from './layout/menu/menu.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { FixedHeaderComponent } from './layout/fixed-header/fixed-header.component';
import { SidebarMenuComponent } from './layout/sidebar-menu/sidebar-menu.component';
import { SidebarPaymentDetailComponent } from './layout/sidebar-payment-detail/sidebar-payment-detail.component';

import { HomeModule } from './views/home/home.module';
import { CartModule } from './views/cart/cart.module';
import { SharedModule } from './shared/shared.module';

import { MenuItems } from './core/constants/menu-items';

import { HttpService } from './services/http.service';
import { PopupService } from './services/popup.service';
import { HelperService } from './services/helper.service';
import { ShoppingService } from './services/shopping.service';

import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { ToastaModule } from 'ngx-toasta';
import { BidiModule } from '@angular/cdk/bidi'
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { UserService } from './services/user.service';

@NgModule({
	declarations: [
		AppComponent,
		MainComponent,	
		MenuComponent,
		FooterComponent,
		HeaderComponent,
		SidebarMenuComponent,		
		FixedHeaderComponent,		
		SidebarPaymentDetailComponent
	],
	imports: [
		BidiModule,
		HomeModule,
		CartModule,
		SharedModule,
		MatIconModule,
		MatListModule,
		HttpClientModule,
		LoadingBarModule,	
		FlexLayoutModule,	
		MatToolbarModule,
		MatSidenavModule,
		LoadingBarRouterModule,
		ToastaModule.forRoot(),
		BrowserAnimationsModule,
		RouterModule.forRoot(AppRoutes, { onSameUrlNavigation: 'reload'}),		
  ],
	providers: [
		MenuItems,
		HttpService,
		PopupService,
		HelperService,
		ShoppingService,
		UserService		
	],
	exports : [
		RouterModule,
		ToastaModule		
	],

	bootstrap: [AppComponent]
})
export class AppModule { }
