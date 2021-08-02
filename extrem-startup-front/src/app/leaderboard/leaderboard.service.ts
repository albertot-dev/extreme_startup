import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class LeaderboardService {

  constructor(private readonly http: HttpClient) {

  }

  get(): Observable<any> {

    return this.http.get<any>(environment.urlBackend + '/leaderboard')

  }
}
