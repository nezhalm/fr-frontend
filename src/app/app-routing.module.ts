import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {HomeComponent} from "./components/home/home.component";
import {CreateProfileComponent} from "./components/create-profile/create-profile.component";
import {RegisterComponent} from "./components/register/register.component";
import {Error404Component} from "./components/error-404/error-404.component";
import {AllOffersComponent} from "./components/all-offers/all-offers.component";
import {CompanyOffersComponent} from "./components/company-offers/company-offers.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
   {path: '', component: HomeComponent},
   {path: 'create-profile', component: CreateProfileComponent},
   {path: 'register', component: RegisterComponent},
   {path: 'error-404', component: Error404Component},
   {path: 'all-offers', component: AllOffersComponent},
   {path: 'company-offers', component: CompanyOffersComponent},
  // {path: 'formQuiz', component: FormQuizComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
