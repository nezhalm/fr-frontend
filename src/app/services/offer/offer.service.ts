import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  constructor(private http: HttpClient) { }
  private apiUrl: string = 'http://localhost:8081/api';

  getAllOffers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/offers/list`);
  }

  deleteOffer(offerId: number): Observable<any> {
    const url = `${this.apiUrl}/offers/${offerId}`; // Remplacez 'offers' par l'endpoint de vos offres
    return this.http.delete<any>(url);
  }
  getCandidatsOfOffer(offerId: number): Observable<any> {
    const url = `${this.apiUrl}/candidat/by-offer/${offerId}`; // Remplacez 'offers' par l'endpoint de vos offres
    return this.http.get<any>(url);
  }
}
