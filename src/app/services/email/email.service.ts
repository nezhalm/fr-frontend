import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private emailApiUrl = 'http://localhost:8081/api/send-email'; // Remplacez ceci par l'URL de votre API d'envoi d'e-mails
  constructor(private http: HttpClient) { }

  sendEmail(candidateEmail: string): Observable<any> {
    const emailBody = {
      to: candidateEmail,
      subject: 'Évaluation technique',
      message: 'Bonjour,\n' +
        '\n' +
        'Votre candidature a retenu notre attention.\n' +
        '\n' +
        'Dans le cadre de notre processus de recrutement, nous avons le plaisir de vous inviter à passer une évaluation technique.\n' +
        'Vous pourrez choisir le moment le plus approprié pour vous pour passer ce test.\n' +
        '\n' +
        'Quand vous serez prêt(e), cliquez sur le lien ci-dessous pour accéder à la page d’accueil de votre session : https://ide.codingame.com/?id=709337652150ff533e6d93614656d1ef83e7139 .\n' +
        '\n' +
        'Bonne chance !\n' +
        '\n' +
        'Cordialement,'
    };
    // Envoyez la demande HTTP POST à votre API d'envoi d'e-mails
    return this.http.post<any>(this.emailApiUrl, emailBody);
  }
}
