import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  constructor(private http: HttpClient) {}

  onSubmit() {
    this.http.post<any>('http://localhost:8081/api/offers/add', this.offerData).subscribe(
      response => {
        console.log('Offre ajoutée avec succès !', response);
        // Réinitialiser le formulaire après soumission réussie si nécessaire
        this.resetForm();
      },
      error => {
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
