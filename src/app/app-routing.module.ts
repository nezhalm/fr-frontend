import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {CreateProfileComponent} from "./create-profile/create-profile.component";
import {RegisterComponent} from "./register/register.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
   {path: '', component: HomeComponent},
   {path: 'create-profile', component: CreateProfileComponent},
   {path: 'register', component: RegisterComponent},
  // {path: 'subjects', component: SubjectsComponent},
  // {path: 'quiz', component: CreateQuizComponent},
  // {path: 'koatch', component: KoatchComponent},
  // {path: 'formQuiz', component: FormQuizComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
