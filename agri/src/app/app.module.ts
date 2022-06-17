import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FeaturesComponent } from './features/features.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { FormComponent } from './form/form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TalktableComponent } from './talktable/talktable.component';
import { DatawarehouseComponent } from './datawarehouse/datawarehouse.component';
import { CardComponent } from './card/card.component';
import { AddcardComponent } from './addcard/addcard.component';
import { ListcardComponent } from './listcard/listcard.component';
import { CardtableComponent } from './cardtable/cardtable.component';
import { LoaderComponent } from './loader/loader.component';
import { Feature1Component } from './feature1/feature1.component';
import { FooterComponent } from './footer/footer.component';
import { HttpCallInterceptor } from './interceptor';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupComponent } from './signup/signup.component';
import { UsertableComponent } from './usertable/usertable.component';
import { ResellerloginComponent } from './resellerlogin/resellerlogin.component';
import { RentalcardComponent } from './rentalcard/rentalcard.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { RentalformComponent } from './rentalform/rentalform.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FeaturesComponent,
    ProductsComponent,
    ContactComponent,
    LoginComponent,
    AdminloginComponent,
    FormComponent,
    DashboardComponent,
    TalktableComponent,
    DatawarehouseComponent,
    CardComponent,
    AddcardComponent,
    ListcardComponent,
    CardtableComponent,
    LoaderComponent,
    Feature1Component,
    FooterComponent,
    SignupComponent,
    UsertableComponent,
    ResellerloginComponent,
    RentalcardComponent,
    LoginpageComponent,
    RentalformComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,HttpClientModule,
    // RouterModule.forRoot(routes)
    Ng2SearchPipeModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpCallInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
