import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ProductComponent } from './components/product/product.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { HomepageComponent } from './components/homepage/homepage.component';
import { PlaceholderComponent } from './components/placeholder/placeholder.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { InputComponent } from './decorator/input/input.component';
import { OutputComponent } from './decorator/output/output.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductComponent,
    HomepageComponent,
    PlaceholderComponent,
    SpinnerComponent,
    InputComponent,
    OutputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxSpinnerModule,
    NgxSkeletonLoaderModule,
    InfiniteScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
