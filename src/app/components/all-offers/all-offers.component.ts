import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {JwtStorageService} from "../../services/jwt/jwt-storage.service";
import {OfferService} from "../../services/offer/offer.service";
import {EntrepriseService} from "../../services/entreprise/entreprise.service";

@Component({
  selector: 'app-all-offers',
  templateUrl: './all-offers.component.html',
  styleUrls: ['./all-offers.component.css']
})
export class AllOffersComponent implements OnInit  {
  offers: any[] = [];
  searchTerm: string = "";
  Data: any; // Variable pour stocker les données de l'entreprise
  entrepriseData: any; // Variable pour stocker les données de l'entreprise

  constructor(
    private offerService: OfferService,
    private companyService: EntrepriseService,
    private route: ActivatedRoute,
    private jwtStorageService: JwtStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const user = this.jwtStorageService.getUser();
    if (user && user.role === 'CANDIDATE') {
      const companyId = user.id;
      // Récupérer les offres de l'entreprise de l'utilisateur
      this.offerService.getAllOffers().subscribe(
        (offers: any[]) => {
          console.log('Offres récupérées:', offers);
          this.offers = offers;
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

  search() {
    if (this.searchTerm.trim() !== '') {
      console.log(this.searchTerm)// Vérifiez si le terme de recherche n'est pas vide
      // Appel pour obtenir les détails de l'entreprise
      this.companyService.getEntrepriseByName(this.searchTerm).subscribe(
        (entrepriseData) => {
          this.Data = entrepriseData
          console.log(this.Data); // Afficher les données de l'entreprise dans la console

          // Si l'entreprise est trouvée, récupérez toutes les offres de cette entreprise
          if (entrepriseData && entrepriseData.id) {
            this.companyService.getAllOffersOfCompany(entrepriseData.id).subscribe(
              (offerData) => {
                console.log(offerData); // Afficher les offres dans la console
              },
              (error) => {
                console.error(error); // Gérer les erreurs de récupération des offres
              }
            );
          }
        },
        (error) => {
          console.error(error); // Gérer les erreurs de récupération des détails de l'entreprise
        }
      );
    }
  }
}
