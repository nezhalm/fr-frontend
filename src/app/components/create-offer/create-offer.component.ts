import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import {LocationStrategy} from "@angular/common";

@Component({
  selector: 'app-create-offer',
  templateUrl: './create-offer.component.html',
  styleUrls: ['./create-offer.component.css']
})
export class CreateOfferComponent {
  offerData = {
    title: '',
    description: '',
    date_debit: '',
    date_fin: '',
    level: '',
    experience: '',
    entreprise: { id: 1 }, // Vous pouvez changer l'id de l'entreprise selon votre besoin
    category: { id: 1 }    // Vous pouvez changer l'id de la catégorie selon votre besoin
  };

  constructor(private http: HttpClient,    private locationStrategy: LocationStrategy
  ) {}

  onSubmit() {
    this.http.post<any>('http://localhost:8081/api/offers/add', this.offerData).subscribe(
      response => {
        // Afficher une alerte SweetAlert en cas de succès
        Swal.fire({
          icon: 'success',
          title: 'Succès !',
          text: 'L\'offre a été ajoutée avec succès !',
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK'
        }).then((result) => {
          if (result.isConfirmed) {
            // Réinitialiser le formulaire après soumission réussie si nécessaire
            this.resetForm();
            // Recharger la page après la confirmation de l'utilisateur
            this.locationStrategy.back();
          }
        });
      },
      error => {
        // Afficher une alerte SweetAlert en cas d'erreur
        Swal.fire({
          icon: 'error',
          title: 'Erreur !',
          text: 'Une erreur est survenue lors de l\'ajout de l\'offre. Veuillez réessayer.',
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK'
        });
        console.error('Erreur lors de l\'ajout de l\'offre :', error);
      }
    );
  }
  resetForm() {
    this.offerData = {
      title: '',
      description: '',
      date_debit: '',
      date_fin: '',
      level: '',
      experience: '',
      entreprise: { id: 1 },
      category: { id: 1 }
    };
  }
}
