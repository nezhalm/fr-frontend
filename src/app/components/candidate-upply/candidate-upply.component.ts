import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CandidatService } from '../../services/candidat/candidat.service';
import {Candidate} from "../../models/request/candidate-request.models";

@Component({
  selector: 'app-candidate-upply',
  templateUrl: './candidate-upply.component.html',
  styleUrls: ['./candidate-upply.component.css']
})
export class CandidateUpplyComponent implements OnInit {
  offerId: number = 0;
  candidate: Candidate = {
    fullname: "",
    email: "",
    phone: "",
    letter: "",
    role: "CANDIDATE",
    password: "",
    date: "",
    cvUrl: "",
    offer: {
      id: 0
    }
  };  constructor(private route: ActivatedRoute, private candidateService: CandidatService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.offerId = params['id'];
      console.log('Offer ID:', this.offerId);
    });
  }

  saveCandidate(): void {
    this.candidate.offer.id= this.offerId;
    this.candidate.role = "CANDIDATE";

    this.candidateService.saveCandidate(this.candidate).subscribe(
      response => {
        console.log('Réponse du backend :', response);
        // Réinitialiser les données du formulaire après un enregistrement réussi
      },
      error => {
        console.error("Erreur lors de l'envoi des données au backend :", error);
        // Traiter l'erreur ici
      }
    );
  }
}
