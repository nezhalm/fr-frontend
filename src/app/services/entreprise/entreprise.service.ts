import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EntrepriseService {

  constructor(private http: HttpClient) { }
  private apiUrl: string = 'http://localhost:8081/api';

  // Récupérer toutes les entreprises
  getAllEntreprises(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/entreprise`);
  }

  getEntrepriseById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/entreprise/${id}`);
  }

   getAllOffersOfCompany(id:number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/offers/company/${id}`);
  }
  getEntrepriseByName(name: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/companies/${name}`);
  }
}
