import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
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
import { TrimbleXfillComponent } from './trimble-xfill/trimble-xfill.component';
import { CardComponent } from './card/card.component';
import { AddcardComponent } from './addcard/addcard.component';
import { ListcardComponent } from './listcard/listcard.component';
import { CardtableComponent } from './cardtable/cardtable.component';
import { LoaderComponent } from './loader/loader.component';
import { Feature1Component } from './feature1/feature1.component';
import { FooterComponent } from './footer/footer.component';
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
    TrimbleXfillComponent,
    CardComponent,
    AddcardComponent,
    ListcardComponent,
    CardtableComponent,
    LoaderComponent,
    Feature1Component,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,HttpClientModule,
    // RouterModule.forRoot(routes)
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
