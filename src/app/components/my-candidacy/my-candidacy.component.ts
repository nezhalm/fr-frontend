import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CandidatService} from "../../services/candidat/candidat.service";
import {JwtStorageService} from "../../services/jwt/jwt-storage.service";
import Swal from "sweetalert2";
import { LocationStrategy } from '@angular/common';


@Component({
  selector: 'app-my-candidacy',
  templateUrl: './my-candidacy.component.html',
  styleUrls: ['./my-candidacy.component.css']
})
export class MyCandidacyComponent {
  candidats: any[] = []; // Déclarer la propriété candidats comme un tableau vide
  candidatId: number =0; // ID du candidat à supprimer

  constructor(private route: ActivatedRoute,
              private candidateService: CandidatService
    ,              private jwtStorageService: JwtStorageService,
              private router: Router,
              private locationStrategy: LocationStrategy

  ) { }

  ngOnInit(): void {
    this.candidateService.myCandidacy(this.jwtStorageService.getUser()?.id).subscribe(
      (candidats: any[]) => {
        this.candidats = candidats;

        // Traitement des candidats récupérés
        console.log('Candidats ', candidats);
      },
      (error) => {
        console.error('Erreur lors de la récupération des candidats pour l\'offre avec ID', error);
      }
    );
  }

  onDeletePost(candidatId: number) {
    Swal.fire({
      title: 'Êtes-vous sûr de vouloir supprimer ce candidat ?',
      text: 'Cette action est irréversible !',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, supprimer !',
      cancelButtonText: 'Annuler'
    }).then((result) => {
      if (result.isConfirmed) {
        // Si l'utilisateur confirme la suppression, appeler le service pour supprimer le candidat
        this.candidateService.deletePost(candidatId).subscribe(() => {
          // Afficher une alerte de succès après la suppression réussie
          Swal.fire(
            'Supprimé !',
            'Le candidat a été supprimé avec succès.',
            'success'
          );
          // Revenir à la page précédente
          this.locationStrategy.back();
        }, error => {
          console.error('Erreur lors de la suppression du candidat :', error);
          // Afficher une alerte d'erreur si la suppression échoue
          Swal.fire(
            'Erreur !',
            'Une erreur s\'est produite lors de la suppression du candidat.',
            'error'
          );
        });
      }
    });
  }

  logout() {
    // Effectuez les étapes de déconnexion ici
    this.jwtStorageService.removeUser();
    this.jwtStorageService.removeToken(); // Supprimez le jeton d'authentification
    // Redirigez l'utilisateur vers la page de connexion
    this.router.navigate(['/login']);
  }

}
