import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './header/side-nav/side-nav.component';
import { MainNavComponent } from './header/main-nav/main-nav.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SearchBoxComponent } from './product-details/search-box/search-box.component';
import { FormsModule } from '@angular/forms';
import { ProductListComponent } from './product-details/product-list/product-list.component';
import { ProductsComponent } from './product-details/product-list/products/products.component';
import { FiltersComponent } from './product-details/product-list/filters/filters.component';
import { ProductInfoComponent } from './product-details/product-info/product-info.component';
import { CommonModule } from '@angular/common';
import { FeatureBrandsComponent } from './product-details/feature-brands/feature-brands.component';
import { DisableDirective } from './CustomDiretives/disable.directive';
@NgModule({
  declarations: [
    AppComponent,
    TopHeaderComponent,
    HeaderComponent,
    SideNavComponent,
    MainNavComponent,
    ProductDetailsComponent,
    SearchBoxComponent,
    ProductListComponent,
    ProductsComponent,
    FiltersComponent,
    ProductInfoComponent,
    FeatureBrandsComponent,
    DisableDirective,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
