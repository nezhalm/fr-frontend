import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HomeComponent} from "./components/home/home.component";
import {CompanyDetailsComponent} from "./components/company-details/company-details.component";
import {CompanyOffersComponent} from "./components/company-offers/company-offers.component";
import {CompanyChatComponent} from "./components/company-chat/company-chat.component";
import {CandidatHomeComponent} from "./components/candidat-home/candidat-home.component";
import {CandidateUpplyComponent} from "./components/candidate-upply/candidate-upply.component";
import {LoginComponent} from "./components/login/login.component";
import {CreateProfileComponent} from "./components/create-profile/create-profile.component";
import {ScrollDirective} from "./components/home/scroll.directive";
import {RegisterComponent} from "./components/register/register.component";
import { Error404Component } from './components/error-404/error-404.component';
import { AllOffersComponent } from './components/all-offers/all-offers.component';
import { AllCompanyOffersComponent } from './components/all-company-offers/all-company-offers.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {AuthInterceptorProvider} from "./interceptors/auth.interceptor";
import { OfferApplicationsComponent } from './components/offer-applications/offer-applications.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CompanyDetailsComponent,
    CompanyOffersComponent,
    CompanyChatComponent,
    CandidatHomeComponent,
    CandidateUpplyComponent,
    LoginComponent,
    CreateProfileComponent,
    ScrollDirective,
    RegisterComponent,
    Error404Component,
    AllOffersComponent,
    AllCompanyOffersComponent,
    OfferApplicationsComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule ,// Ajoutez HttpClientModule aux imports
        FormsModule
    ],
  providers: [AuthInterceptorProvider],

  bootstrap: [AppComponent]
})
export class AppModule { }
