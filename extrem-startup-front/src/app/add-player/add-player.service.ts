import { environment } from './../../environments/environment';
import { AddPlayerModel } from './add-player.model';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AddPlayerService {

  constructor(private readonly http: HttpClient) { }

  addPlayer(newPlayer: AddPlayerModel): Observable<boolean> {
    return this.http.post<boolean>(environment.urlBackend + '/add-player', newPlayer)
  }
}
