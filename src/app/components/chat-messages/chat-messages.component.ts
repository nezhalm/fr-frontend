import { Component } from '@angular/core';
import {OfferService} from "../../services/offer/offer.service";
import {ActivatedRoute, Router} from "@angular/router";
import {JwtStorageService} from "../../services/jwt/jwt-storage.service";
import {EmailService} from "../../services/email/email.service";
import {Candidate} from "../../models/request/candidate-request.models";
import {ChatService} from "../../services/chat/chat.service";
import {Chat} from "../../models/request/chat-request.model";

@Component({
  selector: 'app-chat-messages',
  templateUrl: './chat-messages.component.html',
  styleUrls: ['./chat-messages.component.css']
})
export class ChatMessagesComponent {
  chat :any =[];
  chats: any[] = []; // Déclarez la variable chats
  offerId: number = 0;
  messages: string[] = []; // Liste des messages


  constructor(
    private route: ActivatedRoute,
    private jwtStorageService: JwtStorageService,
    private router: Router,
    private chatService: ChatService


) {}

  messageContent: string = '';



  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const offerId = params['offerId'];

      this.chatService.getAllChatesByOfferId(offerId).subscribe((chats: any[]) => {
        this.chats = chats; // Affectez les chats récupérés à la variable chats

        if (chats.length > 0) {
          // Utilisez la méthode forEach pour parcourir tous les chats et afficher l'ID de l'offre
          chats.forEach(chat => {
            console.log('ID de l\'offre dans le chat:', chat.message);
          });
        } else {
          console.log('Aucun chat trouvé pour l\'offre avec ID', offerId);
        }
      });
    });
  }




  sendMessage() {
    this.route.queryParams.subscribe(params => {
      const chat: Chat = {
        sender: { id: +params['senderId'] }, // Assurez-vous de convertir les IDs en nombres si nécessaire
        recipient: { id: +params['recipientId'] },
        recruitmentOffer: { id: +params['offerId'] },
        message: this.messageContent,
        sentAt : "2024-03-31T10:00:00",
      };
      console.log(params['senderId']);

      console.log(chat);
      if (this.messageContent.trim() !== '') {
        // Envoyer le nouveau message
        this.chatService.saveChat(chat).subscribe(response => {
          // Ajouter le nouveau message à la liste des messages
          this.messages.push(this.messageContent);
          this.messageContent = '';
          // Effacer le champ de saisie après l'envoi du message
        });
      }

    });
  }


  logout() {
    // Effectuez les étapes de déconnexion ici
    this.jwtStorageService.removeUser();
    this.jwtStorageService.removeToken(); // Supprimez le jeton d'authentification
    this.router.navigate(['/login']);
  }



}
