import { Component } from '@angular/core';
import {OfferService} from "../../services/offer/offer.service";
import {ActivatedRoute, Router} from "@angular/router";
import {JwtStorageService} from "../../services/jwt/jwt-storage.service";
import {EmailService} from "../../services/email/email.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-offer-applications',
  templateUrl: './offer-applications.component.html',
  styleUrls: ['./offer-applications.component.css']
})
export class OfferApplicationsComponent {
  candidateId: number = 0;
  candidats: any[] = []; // Déclarer la propriété candidats comme un tableau vide

  constructor(
    private offerService: OfferService,
    private route: ActivatedRoute,
    private jwtStorageService: JwtStorageService,
    private router: Router,
    private emailService: EmailService

  ) {}

  ngOnInit(): void {
    const  offerId = this.getOfferIdFromUrl();
    this.offerService.getCandidatsOfOffer(offerId).subscribe(
      (candidats: any[]) => {
        this.candidats = candidats;

        // Traitement des candidats récupérés
        console.log('Candidats pour l\'offre avec ID', offerId, ':', candidats);
      },
      (error) => {
        console.error('Erreur lors de la récupération des candidats pour l\'offre avec ID', offerId, ':', error);
      }
    );
  }
  sendEmailToCandidate(): void {
    const candidateEmail = 'aminfarida844@gmail.com'; // Remplacez ceci par l'e-mail du candidat
    this.emailService.sendEmail(candidateEmail).subscribe(
      () => {
        // Afficher un message de succès
        Swal.fire({
          icon: 'success',
          title: 'E-mail envoyé !',
          text: `L'e-mail a été envoyé avec succès à ${candidateEmail}.`,
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK'
        });
        console.log('E-mail envoyé avec succès à', candidateEmail);
        // Ajoutez ici tout code supplémentaire à exécuter après l'envoi de l'e-mail
      },
      (error) => {
        // Afficher un message d'erreur
        Swal.fire({
          icon: 'success',
          title: 'E-mail envoyé !',
          text: `L'e-mail a été envoyé avec succès à ${candidateEmail}.`,
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK'
        });
        console.error('Erreur lors de l\'envoi de l\'e-mail à', candidateEmail, ':', error);
        // Ajoutez ici la gestion des erreurs, si nécessaire
      }
    );
  }  logout() {
    // Effectuez les étapes de déconnexion ici
    this.jwtStorageService.removeUser();
    this.jwtStorageService.removeToken(); // Supprimez le jeton d'authentification
    // Redirigez l'utilisateur vers la page de connexion
    this.router.navigate(['/login']);
  }

  getOfferIdFromUrl(): number {
    const url = this.router.url;
    const segments = url.split('/');
    const offerId = +segments[segments.length - 1];
    return offerId;
  }


}
