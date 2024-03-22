import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Candidate} from "../../models/request/candidate-request.models";

@Injectable({
  providedIn: 'root'
})

export class CandidatService {
  constructor(private http: HttpClient) { }

  private apiUrl: string = 'http://localhost:8081/api';

  saveCandidate(candidate: Candidate): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/candidat/save`, candidate);
  }
  getAllCandidates(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/candidat/list`);
  }
}
