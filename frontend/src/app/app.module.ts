import { BrowserModule} from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { HttpClientModule, HttpClient} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { ToastaModule } from 'ngx-toasta';
import { BidiModule } from '@angular/cdk/bidi';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { AppRoutes } from './app-routing';

import { EmbryoService } from './services/Embryo.service';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { FixedHeaderComponent } from './layout/fixed-header/fixed-header.component';
import { MenuComponent } from './layout/menu/menu.component';
import { SidebarMenuComponent } from './layout/sidebar-menu/sidebar-menu.component';
import { SidebarPaymentDetailComponent } from './layout/sidebar-payment-detail/sidebar-payment-detail.component';


import { NotFoundComponent } from './Pages/NotFound/NotFound.component';


import { HomeModule } from './views/home/home.module';
import { CartModule } from './views/cart/cart.module';

import { ToolbarModule } from 'primeng/toolbar'
import { HelperService } from './services/helper.service';
import { MenuItems } from './core/constants/menu-items';
import { SharedModule } from './shared/shared.module';
import { ShoppingService } from './services/shopping.service';
import { HttpService } from './services/http.service';
import { PopupService } from './services/popup.service';



export function createTranslateLoader(http: HttpClient) {
	return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
	declarations: [
		AppComponent,
		MainComponent,	
		MenuComponent,
		SidebarMenuComponent,
		NotFoundComponent,
		HeaderComponent,
		FixedHeaderComponent,
		FooterComponent,
		SidebarPaymentDetailComponent
	],
	imports: [
		BrowserModule.withServerTransition({appId: 'embryo-seo-pre'}),
		BrowserAnimationsModule,
		RouterModule.forRoot(AppRoutes, { onSameUrlNavigation: 'reload'}),
		MatButtonModule,
		FlexLayoutModule,
		MatCardModule,
		MatMenuModule,
		MatToolbarModule,
		MatIconModule,
		MatInputModule,
		MatDatepickerModule,
		MatNativeDateModule,
		MatProgressSpinnerModule,
		MatTableModule,
		MatExpansionModule,
		MatSelectModule,
		MatSnackBarModule,
		MatTooltipModule,
		MatChipsModule,
		MatListModule,
		MatSidenavModule,
		MatTabsModule,
		MatProgressBarModule,
		MatCheckboxModule,
		MatSliderModule,
		MatRadioModule,
		MatDialogModule,
		MatGridListModule,
		HttpClientModule,
		FormsModule,
		ReactiveFormsModule,
		LoadingBarRouterModule,
		LoadingBarModule,
		ToastaModule.forRoot(),
		BidiModule,
		TranslateModule.forRoot({
			loader: {
				provide: TranslateLoader,
				useFactory: createTranslateLoader,
				deps: [HttpClient]
			}
		}),
		SlickCarouselModule,
		HomeModule,
		CartModule,
		ToolbarModule,
		SharedModule
  ],
	providers: [
		MenuItems,
		HelperService,
		EmbryoService,
		ShoppingService,
		HttpService,
		PopupService
	],
	exports : [
		RouterModule,
		ToastaModule		
	],

	bootstrap: [AppComponent]
})
export class AppModule { }
