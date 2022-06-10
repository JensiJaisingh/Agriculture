import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
import { AddcardComponent } from './addcard/addcard.component';
import { ListcardComponent } from './listcard/listcard.component';
import { CardtableComponent } from './cardtable/cardtable.component';
import { Feature1Component } from './feature1/feature1.component';

const routes: Routes = [
{path:'',component:HomeComponent},
{path:'header',component:HeaderComponent},
{path:'features',component:FeaturesComponent},
{path:'products',component:ProductsComponent },
{path:'contact',component:ContactComponent},
{path:'dashboard',component:DashboardComponent},
{path:'login',component:LoginComponent},
{path:'adminlogin',component:AdminloginComponent},
{path:'form',component:FormComponent},
{path:'table',component:TalktableComponent},
{path:'datawarehouse',component:DatawarehouseComponent },
{path:'trimblexfill',component:TrimbleXfillComponent },
{path:'addcard',component:AddcardComponent},
{path:'listcard',component:ListcardComponent},
{path:'cardtable',component:CardtableComponent},
{path:'agrifeature',component:Feature1Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
