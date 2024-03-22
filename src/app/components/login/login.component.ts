import { Component } from '@angular/core';
import {LoginRequest} from "../../models/request/login-request.models";
import {AuthManagementService} from "../../services/auth/auth-management/auth-management.service";
import {FormBuilder, Validators} from "@angular/forms";
import {JwtStorageService} from "../../services/jwt/jwt-storage.service";
import {Router} from "@angular/router";
import Swal from 'sweetalert2';
import {UserResponse} from "../../models/response/user-response.models";
import {RoleCheckerService} from "../../services/auth/role-checker/role-checker.service";
import {Role} from "../../enums/role.enums";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginModel: LoginRequest = { username: '', password: '' };
  errorMessage = '';
  user : UserResponse | any;
  loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]]
  });

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private authService: AuthManagementService,
              private jwtStorageService: JwtStorageService,
              private roleCheckerService: RoleCheckerService) {}


  login() {
    this.authService.login(this.loginModel).subscribe(
      (data) => {
        console.log(data);
        this.jwtStorageService.saveToken(data.token);
        this.jwtStorageService.saveUser(data.user);
        this.user = this.jwtStorageService.getUser();
console.log(this.user.role)
        // Rediriger l'utilisateur en fonction de son rôle
        this.redirectBasedOnUserRole(this.user.role);
      },
      err => {
        console.log(err.error.message);
        this.errorMessage = err.error.message;
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: this.errorMessage
        });
        this.router.navigateByUrl("/login")
      }
    )
  }

  redirectBasedOnUserRole(role: Role): void {
    switch (role) {
      case Role.CANDIDAT:
        this.router.navigate(['/all-offers']);
        break;
      case Role.RECRUITER:
        this.router.navigate(['/company-offers']);
        break;
      default:
        this.router.navigate(['/']); // Rediriger vers une page par défaut si le rôle n'est pas défini ou ne correspond pas à vos cas d'utilisation
        break;
    }
  }

}
