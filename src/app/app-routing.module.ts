import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {HomeComponent} from "./components/home/home.component";
import {CreateProfileComponent} from "./components/create-profile/create-profile.component";
import {RegisterComponent} from "./components/register/register.component";
import {Error404Component} from "./components/error-404/error-404.component";
import {AllOffersComponent} from "./components/all-offers/all-offers.component";
import {CompanyOffersComponent} from "./components/company-offers/company-offers.component";
import {NoAuthGuard} from "./guards/no-auth.guard";
import {CandidateUpplyComponent} from "./components/candidate-upply/candidate-upply.component";
import {CandidatAuthGuard} from "./guards/candidat-auth.guard";
import {CompanyAuthGuard} from "./guards/company-auth.guard";
import {OfferApplicationsComponent} from "./components/offer-applications/offer-applications.component";
import {CreateOfferComponent} from "./components/create-offer/create-offer.component";

const routes: Routes = [
   {path: "login", component: LoginComponent, canActivate: [NoAuthGuard] },
   {path: '', component: HomeComponent, canActivate: [NoAuthGuard] },
   {path: 'create-profile', component: CreateProfileComponent, canActivate: [CandidatAuthGuard]},
   {path: 'register', component: RegisterComponent, canActivate: [NoAuthGuard]},
   {path: 'error-404', component: Error404Component, canActivate: [NoAuthGuard]},
   {path: 'all-offers', component: AllOffersComponent, canActivate: [CandidatAuthGuard]},
   {path: 'company-offers', component: CompanyOffersComponent, canActivate: [CompanyAuthGuard]},
   {path: 'create-profile/:id', component: CandidateUpplyComponent, canActivate: [CandidatAuthGuard]},
  {path: 'details-condidats/:id', component: OfferApplicationsComponent, canActivate: [CompanyAuthGuard]},
  {path: 'create-offer', component: CreateOfferComponent, canActivate: [CompanyAuthGuard]},

  // {path: 'formQuiz', component: FormQuizComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
