import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Candidate} from "../../models/request/candidate-request.models";
import {Observable} from "rxjs";
import {Chat} from "../../models/request/chat-request.model";

@Injectable({
  providedIn: 'root'
})
export class ChatService {

    constructor(private http: HttpClient) { }

  private apiUrl: string = 'http://localhost:8081/api';

    saveChat(chat: Chat): Observable<any> {
      return this.http.post<any>(`${this.apiUrl}/chat`, chat);
    }
    getAllChates(): Observable<any[]> {
      return this.http.get<any[]>(`${this.apiUrl}/chat`);
    }

  getAllChatesByOfferId(id: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/chat/byOffer/${id}`);
  }




}
