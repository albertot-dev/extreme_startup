import { environment } from './../../environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ControlPanelService {

  constructor(private readonly http: HttpClient) { }

  status(): Observable<{ running: boolean, round: number }> {
    return this.http.get<{ running: boolean, round: number }>(environment.urlBackend + '/status')
  }

  start(): Observable<boolean> {
    return this.http.get<boolean>(environment.urlBackend + '/start')
  }

  stop(): Observable<boolean> {
    return this.http.get<boolean>(environment.urlBackend + '/stop')
  }

  reset(): Observable<boolean> {
    return this.http.get<boolean>(environment.urlBackend + '/reset')
  }

  nextRound(): Observable<boolean> {
    return this.http.get<boolean>(environment.urlBackend + '/next')
  }
}
