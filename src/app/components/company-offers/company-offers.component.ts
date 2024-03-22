import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { EntrepriseService } from "../../services/entreprise/entreprise.service";
import { JwtStorageService } from "../../services/jwt/jwt-storage.service";
import {OfferService} from "../../services/offer/offer.service";

@Component({
  selector: 'app-company-offers',
  templateUrl: './company-offers.component.html',
  styleUrls: ['./company-offers.component.css']
})
export class CompanyOffersComponent implements OnInit {
  offers: any[] = [];
  constructor(
    private offerService: OfferService,
    private jwtStorageService: JwtStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const user = this.jwtStorageService.getUser();
    if (user && user.role === 'RECRUITER') {
      const userId = user.id;
      this.offerService.getAllOffers().subscribe(
        (offers: any[]) => {
          this.offers = offers.filter(offer => offer.entreprise.recruiter.id === userId);
          console.log(this.offers)
        },
        (error) => {
          console.error('Erreur lors de la récupération des offres de l\'entreprise:', error);
        }
      );
    } else {
      console.error('L\'utilisateur n\'est pas une entreprise ou n\'est pas connecté.');
    }
  }
  logout() {
    // Effectuez les étapes de déconnexion ici
    this.jwtStorageService.removeUser();
    this.jwtStorageService.removeToken(); // Supprimez le jeton d'authentification
    // Redirigez l'utilisateur vers la page de connexion
    this.router.navigate(['/login']);
  }
  deleteOffer(offerId: number): void {
    this.offerService.deleteOffer(offerId).subscribe(
      () => {
        this.router.navigate(['/company-offers']);

        console.log(`L'offre avec l'ID ${offerId} a été supprimée avec succès.`);
      },
      (error) => {
        console.error(`Erreur lors de la suppression de l'offre avec l'ID ${offerId}:`, error);
      }
    );
  }

}
