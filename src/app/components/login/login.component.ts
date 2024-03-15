import { Component } from '@angular/core';
import {LoginRequest} from "../../models/request/login-request.models";
import {AuthManagementService} from "../../services/auth/auth-management/auth-management.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginModel: LoginRequest = { username: '', password: '' };

  constructor(private authService: AuthManagementService) { }

  login() {
    this.authService.login(this.loginModel).subscribe(response => {
      // Gérer la réponse du serveur ici
      localStorage.setItem('token', response.token);
      console.log('Login successful');
      console.log('Response data:', response); // Affiche les données de la réponse
    }, error => {
      console.error('Login failed:', error);
    });
  }

}
