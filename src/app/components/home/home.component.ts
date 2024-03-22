import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {JwtStorageService} from "../../services/jwt/jwt-storage.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private jwtStorageService: JwtStorageService, private router: Router) {}

  logout() {
    // Effectuez les étapes de déconnexion ici
    this.jwtStorageService.removeUser();
    this.jwtStorageService.removeToken(); // Supprimez le jeton d'authentification
    // Redirigez l'utilisateur vers la page de connexion
    this.router.navigate(['/login']);

  }
}
