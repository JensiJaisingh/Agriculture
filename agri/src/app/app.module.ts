import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { APP_BOOTSTRAP_LISTENER } from '@angular/core';
import { RouterModule,Routes} from '@angular/router';
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
import { ActivitiesComponent } from './activities/activities.component';
import { DatawarehouseComponent } from './datawarehouse/datawarehouse.component';
import { TrimbleXfillComponent } from './trimble-xfill/trimble-xfill.component';
// const routes: Routes =[
//   {path:'',component:HomeComponent},
//   {path:'features',component:FeaturesComponent},
//   {path:'products',component:ProductsComponent },
//   {path:'contact',component:ContactComponent},
//   // {path:'userlogin',component:LoginComponent},
//   {path:'login',component:AdminloginComponent}
// ];
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
    ActivitiesComponent,
    DatawarehouseComponent,
    TrimbleXfillComponent
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
