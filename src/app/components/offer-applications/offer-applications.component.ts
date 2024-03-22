import { Component } from '@angular/core';
import {OfferService} from "../../services/offer/offer.service";
import {ActivatedRoute, Router} from "@angular/router";
import {JwtStorageService} from "../../services/jwt/jwt-storage.service";

@Component({
  selector: 'app-offer-applications',
  templateUrl: './offer-applications.component.html',
  styleUrls: ['./offer-applications.component.css']
})
export class OfferApplicationsComponent {
  constructor(
    private offerService: OfferService,
    private route: ActivatedRoute,
    private jwtStorageService: JwtStorageService,
    private router: Router

  ) {}
  logout() {
    // Effectuez les étapes de déconnexion ici
    this.jwtStorageService.removeUser();
    this.jwtStorageService.removeToken(); // Supprimez le jeton d'authentification
    // Redirigez l'utilisateur vers la page de connexion
    this.router.navigate(['/login']);
  }
}
