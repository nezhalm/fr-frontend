import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { JwtStorageService } from "../../services/jwt/jwt-storage.service";
import {OfferService} from "../../services/offer/offer.service";
import Swal from 'sweetalert2';
import {LocationStrategy} from "@angular/common";
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
    private router: Router,
    private locationStrategy: LocationStrategy


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
    Swal.fire({
      title: 'Êtes-vous sûr de vouloir supprimer cette offre ?',
      text: 'Cette action est irréversible !',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui, supprimer',
      cancelButtonText: 'Annuler'
    }).then((result) => {
      if (result.isConfirmed) {
        this.offerService.deleteOffer(offerId).subscribe(
          () => {
            this.router.navigate(['/company-offers']);
            Swal.fire(
              'Supprimé !',
              `L'offre avec l'ID ${offerId} a été supprimée avec succès.`,
              'success'
            );
            location.reload();

          },
          (error) => {
            console.error(`Erreur lors de la suppression de l'offre avec l'ID ${offerId}:`, error);
            Swal.fire(
              'Erreur !',
              `Une erreur est survenue lors de la suppression de l'offre avec l'ID ${offerId}.`,
              'error'
            );
          }
        );
      }
    });
  }
  goToView(): void {
    this.router.navigate(['/create-offer']);
  }
}
