import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CandidatService } from '../../services/candidat/candidat.service';
import {Candidate} from "../../models/request/candidate-request.models";
import Swal from "sweetalert2";
import {JwtStorageService} from "../../services/jwt/jwt-storage.service";

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
    },
    user: {
      id: 0
    }
  };  constructor(private route: ActivatedRoute,
                  private candidateService: CandidatService
  ,              private jwtStorageService: JwtStorageService,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.offerId = params['id'];
      console.log('Offer ID:', this.offerId);
    });
  }

  saveCandidate(): void {
    this.candidate.offer.id = this.offerId;
    this.candidate.user.id = <number>this.jwtStorageService.getUser()?.id;
    this.candidate.role = "CANDIDATE";

    this.candidateService.saveCandidate(this.candidate).subscribe(
      response => {
        console.log('Réponse du backend :', response);
        // Afficher une SweetAlert de succès
        Swal.fire({
          icon: 'success',
          title: 'Succès !',
          text: 'Le candidat a été enregistré avec succès.',
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK'
        }).then((result) => {
          // Rediriger ou effectuer toute autre action après la confirmation
          if (result.isConfirmed) {
            // Par exemple, rediriger vers une autre page
            // this.router.navigate(['/dashboard']);
          }
        });
      },
      error => {
        console.error("Erreur lors de l'envoi des données au backend :", error);
        // Afficher une SweetAlert d'erreur
        Swal.fire({
          icon: 'error',
          title: 'Erreur !',
          text: 'Une erreur s\'est produite lors de l\'enregistrement du candidat. Veuillez réessayer.',
          confirmButtonColor: '#d33',
          confirmButtonText: 'OK'
        });
      }
    );
  }
}
