import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { CompanyOffersComponent } from './company-offers/company-offers.component';
import { CompanyChatComponent } from './company-chat/company-chat.component';
import { CandidatHomeComponent } from './candidat-home/candidat-home.component';
import { CandidateUpplyComponent } from './candidate-upply/candidate-upply.component';
import { LoginComponent } from './login/login.component';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { ScrollDirective } from './home/scroll.directive';
import { RegisterComponent } from './register/register.component';

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
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
